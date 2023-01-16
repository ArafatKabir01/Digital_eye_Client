import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BiDislike, BiLike } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineDelete, AiTwotoneStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { UserContext } from '../Shared/ContextUser';
import UseSingleUser from '../Hooks/UseSingleUser';
import blankImg from "../../Images/blank-profile.png"
const CustomerReviews = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let { id } = useParams()
  const location = useLocation()
  const [user, loading, error] = useAuthState(auth);
  const [rating, setRating] = useState(3)
  const [ratingStatus, setRatingStatus] = useState("")

  const userApi = `http://localhost:5000/userInfo/${user?.email}`
  let { users, userLoading, userRefetch, setValu } = UseSingleUser(userApi)
  const {setNewUser , newUser} = useContext(UserContext)

useEffect(()=>{
  if (newUser === true) {
    userRefetch()
  }
},[newUser])
  const { data , isLoading, refetch } = useQuery('reviewData', () => fetch('http://localhost:5000/customerReview', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
const reversedData = data?.reverse();

  useEffect(() => {
    if (rating === 5) {
      setRatingStatus("Excilent Product")
    } else if (rating === 4) {
      setRatingStatus("Good Product")
    } else if (rating === 3) {
      setRatingStatus("Avarage Product")
    } else if (rating === 2) {
      setRatingStatus("Poor Product")
    } else {
      setRatingStatus("Bad Product")
    }
  }, [rating])
  if(isLoading){
    return <Loading/>
  }


  const onSubmit = data => {

    let newDate = new Date()
    console.log(newDate)
    const newReviewData = {
      ratingStatus: ratingStatus,
      date: newDate,
      productId: id,
      rating: rating,
      name: data.name,
      email: data.email,
      review: data.review,
      img: users.images

    }

    const url = `http://localhost:5000/customerReview/:${id}`
    fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newReviewData)

    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        refetch()
      })

  

  }

  const handleDeleteReview = (rid) => {
    const proceed = window.confirm('are you sure?')
    if (proceed) {
      const url = `http://localhost:5000/review/${rid}`
      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch()
        })

    }
  }
  return (
    <div className='container m-auto py-5 '>
      <div className='grid grid-cols lg:grid-cols-3 gap-3 lg:gap-8 p-3'>
        <div className='col-span lg:col-span-2'>
          <h2 className='text-2xl text-white my-4'>Customer Reviews</h2>
          <hr className='my-3' />
          {reversedData?.filter(value => {
            if (!value.productId) {
              return <h1>No review Yet</h1>;
            } else if (value.productId === id) {
              return value
            }
          }).map(review => <div>
            <div className='grid grid-cols lg:grid-cols-9 justify-items-center gap-2 lg:gap-6 '>
              <div className='h-32 w-44  grid justify-items-center col-span lg:col-span-2 p-4'>
                <div className="avatar h-10">
                  <div className="w-10  rounded-full ring  ring-[#D5ABA4] ring-offset-2">
                    <img src={review?.img ? review?.img: blankImg} />
                  </div>
                </div>
                <div className='w-18'>
                  <p className='text-white text-sm font-bold'>{review?.name}</p>
                </div>
              </div>

              <div className='w-full col-span lg:col-span-7'>
                <div className='flex justify-between items-center my-3'>
                  <div className='text-xl font-bold'>
                    <h2>{review?.ratingStatus}</h2>
                    <div>
                      <Rating
                        initialRating={review?.rating}
                        emptySymbol={< AiOutlineStar />}
                        fullSymbol={<AiTwotoneStar className='text-amber-400 ' />}
                        readonly


                      />
                    </div>
                  </div>
                  <div>
                    <p>{review?.date?.slice(0, 10)}</p>
                  </div>
                </div>
                <p className='my-4 text-xl'>{review?.review?.slice(0, 300)}</p>
                <div className='flex gap-2 items-center'>
                  <h2 className='text-white text-xl'>Was this helpful?</h2>
                  <div className='flex gap-2 text-xl font-bold'>
                    <span><BiLike /></span>
                    <span><BiDislike /></span>
                    {review?.email === user?.email && <button onClick={() => handleDeleteReview(review._id)} className='btn btn-xs mx-6'><AiOutlineDelete /></button>}
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>)}



        </div>
        <div className='w-full '>
          <h2 className='text-2xl text-white my-4 '>Write a Review</h2>
          <hr className='my-3' />
          <div>
            <div className='flex justify-between items-center my-3'>
              <h2 className='text-xl font-bold'>Rate This Product</h2>
              <div>
                <Rating
                  initialRating={rating}
                  name="simple-controlled"
                  onClick={(rate) => setRating(rate)}
                  emptySymbol={< AiOutlineStar className=' text-2xl' />}
                  fullSymbol={<AiTwotoneStar className='text-amber-400 text-2xl' />}

                />
              </div>
            </div>
            <div className='w-full'>
              <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div class="">
                  <div class="w-full grid grid-cols">
                    <div>
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input {...register("name", { required: true })} type="text" className="w-full resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input {...register("email", { required: true })} type="email" className="w-full resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                      <div className="my-3">

                        <textarea
                          {...register("review", { required: false })}
                          rows="4"
                          name="review"
                          id="review"
                          placeholder="Your Review"
                          className="w-full my-2 resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                      </div>


                    </div>

                  </div>

                  <div class="form-control mt-6">
                    <button class="btn rounded-none bg-[#C59C86] text-white">Post Review</button>
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default CustomerReviews