import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const CustomerReviews = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let { id } = useParams()
  const [user, loading, error] = useAuthState(auth);
  const onSubmit = data => {
    console.log(data)

    const url = `https://manufacturer-0397.onrender.com/customerorder`
    fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)

    })
        .then(res => res.json())
        .then(result => console.log(result))
}
  return (
    <div className='container m-auto h-screen pt-20'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='text-2xl text-white my-4'>Customer Reviews</h2>
          <hr className='my-3' />
          <div className='flex gap-6'>

            <div className='h-32 w-44 grid justify-items-center p-4'>
              <div className="avatar h-10">
                <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <p className='text-white text-xl font-bold'>name name</p>
              </div>
            </div>

            <div className='w-full'>
              <div className='flex justify-between items-center my-3'>
                <div className='text-xl font-bold'>
                  <h2>test</h2>
                  <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  </div>
                </div>
                <div>
                  <p>date:23213</p>
                </div>
              </div>
              <p className='my-4 text-xl'>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1 Bluetooth wireless listening freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfor</p>
              <div className='flex gap-2 items-center'>
                <h2 className='text-white text-xl'>Was this helpful?</h2>
                <div className='flex gap-2 text-xl font-bold'>
                  <span><BiLike /></span>
                  <span><BiDislike /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div> 

        </div>
        <div>
          <h2 className='text-2xl text-white my-4 '>Write a Review</h2>
          <hr className='my-3' />
          <div>
            <div className='flex justify-between items-center my-3'>
              <h2 className='text-xl font-bold'>Rate This Product</h2>
              <div className="rating rating-md">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <div>
            <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                            <div class="">
                                <div class="w-full grid grid-cols">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input {...register("name", { required: true })} type="email"  className="w-full resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} type="email"  className="w-full resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                    <div>
                                        <div className="my-3">
                                           
                                            <textarea
                                                {...register("condition", { required: false })}
                                                rows="4"
                                                name="condition"
                                                id="condition"
                                                placeholder="Your Review"
                                                className="w-full my-2 resize-none rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            ></textarea>
                                        </div>


                                    </div>

                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn rounded-none bg-[#C59C86] text-white">Add to Cart</button>
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