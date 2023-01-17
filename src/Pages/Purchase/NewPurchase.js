import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Shared/Loading';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
const NewPurchase = () => {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    const [pageState, setPageState] = useState(false)
    const [color, setColor] = useState(0)
    const navigate = useNavigate()

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
    }, [id]);

    if (!product?.title) {
        return <Loading />
    }
    const handleColor = data => {
        setColor(data)
    }
    const handleBuy = () => {
        navigate(`/confiremBuy/${id}`)
    }
    const handlepreOrder = () => {
        navigate(`/confiremBuy/${id}`)
    }

    return (
        <div className='scroll-smooth overflow-x-hidden relative '>
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

                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-3 justify-items-center my-20">
                        <div data-aos="fade-right" className='lg:ml-24'>
                            <h2 className="text-5xl font-bold text-white">{product.title}</h2>

                            <div className='w-full lg:w-64 my-3'>
                                <p className='text-3xl text-purple-50 mb-3'>${product.price}</p>
                                <input onClick={() => handleColor(0)} type="radio" name="radio-3" className="radio w-12 bg-red-500 checked:bg-red-500 " />
                                <input onClick={() => handleColor(1)} type="radio" name="radio-3" className="radio w-12 bg-black checked:bg-black mx-3" />
                                <input onClick={() => handleColor(2)} type="radio" name="radio-3" className="radio w-12 bg-[#D5ABA4] checked:bg-[#D5ABA4] " />
                            </div>
                            {product?.availableQuantity < 10 ? <button onClick={() => handlepreOrder()} className="btn btn-sm  my-2">Pre Order</button> : <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>}

                        </div>
                        <div div data-aos="fade-left">
                            <img src={product?.images[color]} className=" h-[300px] w-[340px] lg:h-[500px] lg:w-[500px] " />
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
                            {product?.availableQuantity < 10 ? <button onClick={() => handlepreOrder()} className="btn btn-sm  my-2">Pre Order</button> : <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>}

                        </div>

                    </div>
                </div>
                <div className="hero  ">
                    <div className="hero-content grid grid-cols lg:grid-cols-2 gap-8 justify-items-center my-20">

                        <div data-aos="fade-right" data-aos-duration="1500">
                            <h2 className="text-7xl font-bold">Highlights</h2>
                            <p className="py-6">{product.highlights}</p>
                            {product?.availableQuantity < 10 ? <button onClick={() => handlepreOrder()} className="btn btn-sm  my-2">Pre Order</button> : <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>}

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
                            {product?.availableQuantity < 10 ? <button onClick={() => handlepreOrder()} className="btn btn-sm my-2">Pre Order</button> : <button onClick={() => handleBuy()} className="btn btn-sm w-64 my-3">Buy Now</button>}

                        </div>

                    </div>
                </div>

                <div className="p-5">
                    <CustomerReviews />

                </div>
            </div>

        </div>
    )
}

export default NewPurchase