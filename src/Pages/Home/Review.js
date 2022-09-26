import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './Review.css'

// import required modules
import { EffectCards } from "swiper";
const Review = () => {
    return (
        <div className='reviews'>
            <h2  className='text-5xl font-bold text-center  mb-8 pt-12'>Reviews</h2>
            <Swiper
            
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper review-swiper "
            >
                <SwiperSlide data-theme="night" className='review-SwiperSlide'><div className="card shadow-none w-96 bg-base-100 shadow-xl">
                    <div className="avatar p-8 gap-4 ">
                        <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <h2 className="card-title ps-4">Alex</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>"If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?"</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide data-theme="night" className='review-SwiperSlide'><div className="card shadow-none w-96 bg-base-100 shadow-xl">
                    <div className="avatar p-8 gap-4 ">
                        <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <h2 className="card-title ps-4">Alex</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>"If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?"</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide data-theme="night" className='review-SwiperSlide'><div className="card shadow-none w-96 bg-base-100 shadow-xl">
                    <div className="avatar p-8 gap-4 ">
                        <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <h2 className="card-title ps-4">Alex</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>"If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?"</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide data-theme="night" className='review-SwiperSlide'><div className="card shadow-none w-96 bg-base-100 shadow-xl">
                    <div className="avatar p-8 gap-4 ">
                        <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <h2 className="card-title ps-4">Alex</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>"If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?"</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide data-theme="night" className='review-SwiperSlide'><div className="card shadow-none w-96 bg-base-100 shadow-xl">
                    <div className="avatar p-8 gap-4 ">
                        <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <h2 className="card-title ps-4">Alex</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>"If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?"</p>
                    </div>
                </div></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Review;