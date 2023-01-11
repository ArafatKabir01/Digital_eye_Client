import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import productImg from "../../Images/MX472-removebg-preview.png";
import productImg2 from "../../Images/MX472_AV1-removebg-preview.png";
import Loading from '../Shared/Loading';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
const NewPurchase = () => {
    let { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [product, setProduct] = useState([])
    const [pageState, setPageState] = useState(false)
    const [color, setColor] = useState(0)
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [page, setPage] = useState(0);


    window.addEventListener('scroll', () => {

        if (window.scrollY > 400) {
            setPageState(true)
        } else {
            setPageState(false)
        }

    });

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
            .then(result => console.log(result))
    };
    const handleColor = data => {
        setColor(data)
    }
    const handleBuy = () => {
        navigate(`/confiremBuy/${id}`)
    }

    return (
        <div className='scroll-smooth overflow-x-hidden relative bg-base-200'>
            <div className='scroll-smooth'>
                <div className="z-30 absolute  mr-[70px] lg:mr-[200px] mt-[200px] lg:mt-[300px]">
                    {pageState === true && <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rotate-90 text-md text-white right-0 fixed" ><IoIosArrowDropleftCircle className='w-10 h-10 mx-10' /></p>}
                    <div className='flex'>
                        {pageState === false && <p onClick={() => window.scrollTo({
                            top: document.body.scrollHeight,
                            left: 0,
                            behavior: "smooth"
                        })} className="rotate-90 right-0 text-md text-white fixed" ><IoIosArrowDroprightCircle className='w-10 h-10 mx-10' /></p>}
                    </div>

                </div>
                <div id='top' className="hero min-h-screen">

                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-8 justify-items-center my-20">
                        <div data-aos="fade-right">
                            <h2 className="text-[6vh] font-bold">{product.title}</h2>

                            <div className='w-64 my-6'>
                                <p className='text-2xl p-5'>$199</p>
                                <input onClick={() => handleColor(0)} type="radio" name="radio-3" className="radio w-12 bg-red-500 checked:bg-red-500 mx-3" />
                                <input onClick={() => handleColor(1)} type="radio" name="radio-3" className="radio w-12 bg-black checked:bg-black" />
                                <input onClick={() => handleColor(2)} type="radio" name="radio-3" className="radio w-12 bg-[#D5ABA4] checked:bg-[#D5ABA4] mx-3" />
                            </div>
                            <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>
                        </div>
                        <div div data-aos="fade-left">
                            <img src={product?.images[color]} className=" h-[300px] w-[340px] lg:h-[700px] lg:w-[800px]" />
                        </div>
                    </div>
                </div>
                <div className="hero ">
                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-8 justify-items-center my-20">
                        <div data-aos="fade-right" data-aos-duration="1500" className='mx-10'>
                            <img src={product?.images[3]} className=" h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h2 className="text-7xl font-bold">Overview</h2>
                            <p className="py-6">{product.overview}</p>
                            <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>
                        </div>

                    </div>
                </div>
                <div className="hero  ">
                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-8 justify-items-center my-20">

                        <div data-aos="fade-right" data-aos-duration="1500">
                            <h2 className="text-7xl font-bold">Highlights</h2>
                            <p className="py-6">{product.highlights}</p>
                            <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" className='mx-10'>
                            <img src={product?.images[4]} className=" h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                        </div>
                    </div>
                </div>
                <div id='down' className="hero ">
                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-8 justify-items-center my-20">
                        <div data-aos="fade-right" data-aos-duration="1500" className='mx-10'>
                            <img src={product?.images[5]} className=" h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h2 className="text-7xl font-bold">Tech Specs</h2>
                            <p className="py-6">{product.tech_Specs}</p>
                            <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>
                        </div>

                    </div>
                </div>
                
                <div className="">
                    <CustomerReviews/>
                    
                </div>
            </div>

        </div>
    )
}

export default NewPurchase