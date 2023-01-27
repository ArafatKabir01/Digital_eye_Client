import React from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import Mylocation from './Mylocation';
const ContactUs = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
    }
    return (
        <div className='bg-black w-screen'>
            <div className='grid grid-cols lg:grid-cols-2 justify-item-center container m-auto '> 
                <div className='p-2 lg:p-8'>
                    <div className='w-full'>
                        <div className='w-9/12'>
                            <h2 className='text-4xl font-bold text-white mb-8'>Get In Touch With Us </h2>
                            <p>BassBoss is a headphone manufacturer company that has developed a React.js web application. It has some basic features for both users and admins.</p>
                        </div>
                        <div className='my-8 '>
                            <div className=' flex flex-wrap justify-center  gap-8 '>
                                <div className='lg:text-center'>
                                    <p className='w-10 h-10 lg:m-auto border border-[#C9971C] rotate-45 p-1 my-4'><AiOutlineHome className='text-2xl -rotate-45 ' /></p>
                                    <p className='my-4'>Address : Chottagram,<br /> Bangladesh 4217</p>
                                </div>
                                <div className='lg:text-center'>
                                    <p className='w-10 h-10 lg:m-auto border border-[#C9971C] rotate-45 p-1 my-4'><AiOutlinePhone className='text-2xl -rotate-45 mt-1 ml-1' /></p>
                                    <p className='mt-4'>+8801859670492</p>
                                    <p>+8801859670492</p>
                                </div>
                                <div className='lg:text-center'>
                                    <p className='w-10 h-10 lg:m-auto border border-[#C9971C] rotate-45 p-1 my-4'><BiWorld className='text-2xl -rotate-45 mt-1 ml-1' /></p>
                                    <p className='mt-4'>www.demoWeb.com</p>
                                    <p>nabil786.ak@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-shrink-0 w-full lg:w-5/6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 w-full">
                            <h2 className='font-bold text-white text-xl my-4'>Send Message</h2>
                            <div className='grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-3'>
                                <div className="form-control  ">
                                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered rounded-none	" />
                                    {errors.displayName?.type === 'required' && <p className='text-red-600'>Name is required</p>}
                                </div>
                                <div className="form-control">
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-none	" />
                                    {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}
                                </div>
                                <div className="my-3 col-span lg:col-span-2">

                                    <textarea
                                        {...register("message", { required: true })}
                                        rows="4"
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        className="w-full resize-none border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col w-28 m-auto border-opacity-50">
                                <div className="form-control ">
                                    <button className="btn bg-white ">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='ml-0 lg:ml-20'>
                    <Mylocation />
                </div>
            </div>
        </div>
    )
}

export default ContactUs