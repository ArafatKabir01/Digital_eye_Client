import React from 'react'
import musicBg from '../../Images/1162649.jpg'
import { useForm } from "react-hook-form";
const Subscription = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const email = data.email
    }
    return (
        <div style={{ backgroundImage: `url(${musicBg})` }} className="hero min-h-screen bg-fixed bg-center
        bg-no-repeat bg-cover">

            <div className="hero-content text-center text-neutral-content">
                <div style={{ backgroundColor: `#283442` }} className="w-[800px] h-[280px] rounded opacity-80	">
                    <div className='my-20'>
                        <h2 className=" text-3xl font-bold text-slate-200	">Subscribe For New Music</h2>
                        <div className='flex gap-3 justify-center'>
                            <p className="">Free Music for one week and Get new music update news</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className=" ">
                                <div className=' w-full flex gap-3 justify-center my-6'>
                                    <div>
                                        <input {...register("email", { required: true })} type="email" placeholder="Type your email address" className="input input-bordered" />
                                    </div>
                                    <div>
                                        <button className="btn btn-warning rounded-none">I Want It</button>
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

export default Subscription