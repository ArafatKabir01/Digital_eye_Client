import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { UserContext } from '../Shared/ContextUser';
import Loading from '../Shared/Loading';

export const ConfiremPurchese = () => {
    const [countries, setCountries] = useState([])
    const [product, setProduct] = useState([])
    const colors = ["Red", "Black", "Rose Gold"]
    const maxQuantity = ~~product.availableQuantity
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const { setNewUser, newUser } = useContext(UserContext)
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }, [])
    useEffect(() => {
        axios.get(`https://manufacturer-0397.onrender.com/part/${id}`)
            .then(function (response) {
                // handle success
                setProduct(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        const addToCart = (product) => {
            console.log(product)

        }

    }, []);

    if (!product?.title) {
        return <Loading />
    }
    const onSubmit = data => {
        console.log(data)

        const url = `https://manufacturer-0397.onrender.com/customerorder`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                setNewUser(true)
                console.log(result)
            })
    }
    return (
        <div className='hero min-h-screen '>
            <div className="hero-content  text-center my-20">

                <div class="flex-col lg:flex-row-reverse">
                    <div data-aos="zoom-in" class="card  w-full shadow-2xl ">
                        <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                            <div class="card-body ">

                                <div class=" w-full lg:w-[800px] grid grid-cols lg:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} type="email" value={user.email} className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <div className=" rounded-md shadow-sm my-2">
                                            <label className="label">
                                                <span className="label-text">Selecte Your Country</span>
                                            </label>
                                            <select {...register("country", { required: true })} className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                                {countries.map((country) => (
                                                    <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                        <div className=" rounded-md shadow-sm my-2">
                                            <label className="label">
                                                <span className="label-text">Selecte Color</span>
                                            </label>
                                            <select {...register("productColor", { required: true })} className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                                {colors.map((color) => (
                                                    <option key={color} value={color}>{color}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                        <label class="label">
                                            <span class="label-text">Product Name</span>
                                        </label>
                                        <input value={product.title} {...register("title", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <label class="label">
                                            <span class="label-text">Price</span>
                                        </label>
                                        <input value={product.price} {...register("price", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <label className="label">
                                            <span className="label-text">Set Quantity</span>
                                        </label>
                                        <input {...register("quantity", { min: 10, max: maxQuantity }, { required: true })} type="number" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        <div className='text-left my-2'>
                                            {errors.quantity && <span className='text-rose-300 '>Minimum Quantity 10 pieces and Maximum Quantity {maxQuantity}  pieces</span>}
                                        </div>

                                    </div>

                                    <div>
                                        <div className="my-1">
                                            <label
                                                for="condition"
                                                className="label-text my-2"
                                            >
                                                Any Special Condition (optional)
                                            </label>
                                            <textarea
                                                {...register("condition", { required: false })}
                                                rows="4"
                                                name="condition"
                                                id="condition"
                                                placeholder="Write Your special Conditian, If any."
                                                className="w-full my-2 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <div className="my-1">
                                                <label
                                                    for="address"
                                                    className="label-text my-2"
                                                >
                                                    Write your delivery address
                                                </label>
                                                <textarea
                                                    {...register("address", { required: true })}
                                                    rows="2"
                                                    name="address"
                                                    id="address"
                                                    placeholder="Write Your delivery Address"
                                                    className="w-full my-2 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                ></textarea>
                                            </div>


                                        </div>


                                    </div>

                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn bg-[#C59C86] text-black hover:text-white">Add to Cart</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>


        </div>
    )
}
