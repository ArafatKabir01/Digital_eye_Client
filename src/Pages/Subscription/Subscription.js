import React, { useState } from 'react'
import musicBg from '../../Images/1162649.jpg'
import { useForm } from "react-hook-form";
const Subscription = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const email = data.email
    }
    const [count, setCount] = useState(false);
    const [countT, setCountT] = useState(0);

    window.addEventListener('scroll', () => {

        setCountT((window.scrollY / 800));
        if (window.scrollY / 800 > 2.8) {
            setCount(true)
        } else {
            setCount(false)
        }

    });
    return (
        <div style={{ backgroundImage: `url(${musicBg})` }} className="hero min-h-screen bg-fixed bg-center
        bg-no-repeat bg-cover">
            <img style={{ transform: `scale(${countT})`, top: "2300px" }} className={count ? "element  hidden md:block lg:block w-[370px] h-[350px]  " : "  w-[370px] h-[350px] hidden md:block lg:block element2"} src="https://www.apple.com/v/airpods-max/e/images/overview/hero__gnfk5g59t0qe_xlarge.png" />
            <div >

                <div className="hero-content text-center text-neutral-content">
                    <div className=" p-2 w-full lg:w-[800px] h-full lg:h-[280px] rounded opacity-80	">
                        <div className='my-20 '>
                            <h2 className=" text-4xl font-bold text-green-400	">Subscribe For new Products</h2>
                            <div className='flex gap-3 justify-center'>
                                <p className="">We Will send two email in a week for new products</p>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                                    <div className=' w-full flex gap-3 justify-center my-6'>
                                        <div>
                                            <input {...register("email", { required: true })} type="email" placeholder="Type your email address" className="input input-bordered rounded-none" />
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
        </div>
    )
}

export default Subscription