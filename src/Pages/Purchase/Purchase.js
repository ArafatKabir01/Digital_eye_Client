import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import Loading from "../Shared/Loading"

const Purchase = () => {
    let { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://manufacturer-0397.onrender.com/part/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const addToCart = (product) => {
        console.log(product)

    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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

       
        const getOrders = async() =>{
              const email = user.email
              const url = `https://manufacturer-0397.onrender.com/myOrder?email=${email}`
              const {data , refatch} = await axios.get(url , {
                  headers : {
                      authorization : `bearer ${localStorage.getItem("accessToken")}`
                  }
              } )
              const newData =  data.filter(d => !d.paid)
              
              localStorage.setItem('totalOrder', newData.length)
             
          }
          getOrders()
        //   if (data.title && data.quantity) {
        //     navigate('/dashboard/myorder')
          
        // }


    };
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.img} className="w-80 md:w-96 lg:w-3/5 h-62 md:h-62 lg:h-3/5 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.details}</p>
                        <div className='w-50 h-50 font-bold	leading-6 text-white'>
                            <p>Price : {product.price}$</p>
                            <p>Minimum Order Quantity : {product.minQuantity} pic</p>
                            <p>Available quantity : {product.availableQuantity} pic</p>
                        </div>
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                        <div className='flex gap-4 mt-8'>
                            <div className="form-control">
                                {/* <label className="input-group">
                                    <button className="btn btn-primary">-</button>
                                    <input type="number" {...register("quantity", { min: 20, max: 300 })} style={{ "width": "80px" }} size="2" className="input input-bordered " />
                                    <button className="btn btn-primary">+</button>
                                </label> */}
                            </div>
                            <label htmlFor="my-modal-6" className="btn modal-button">Add To Cart</label>
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-control w-80 ">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input {...register("email", { required: true })} type="email" value={user.email} className="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Product Title</span>
                                            </label>
                                            <input value={product.title} {...register("title", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Price</span>
                                            </label>
                                            <input value={product.price} {...register("price", { required: true })} type="text" class="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Set Quantity</span>
                                            </label>
                                            <input {...register("quantity", { min: 20 }, { required: true })} type="number" className="input input-bordered" />
                                            {errors.quantity && <span>Please Minimum Quantity upto 20</span>}
                                        </div>

                                        <div className="form-control mt-6 flex" >

                                            <input type="submit" className="btn btn-primary w-80 mb-2" />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Purchase;