import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-cube";
import "swiper/css/pagination";


import "./Banner.css";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

const Banner = () => {
    return (
        <div className="container flex justify-items-center m-auto">
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 30,
                    shadowScale: 1.94,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCube, Pagination]}

                className="mySwiper"
            >
                <SwiperSlide >
                    <div className="flex items-center ">
                        <div className=" banner-text">
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        
                        <img src="https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/13533_D7200_v2.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex items-center ">
                        <div className=" banner-text">
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <img className="" src="https://i.ibb.co/jgrjcLQ/pngegg-2.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex items-center ">
                        <div className=" banner-text">
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <img src="https://i.ibb.co/pjWLC6m/kisspng-nikon-d3200-nikkor-camera-lens-prime-lens-camera-flyer-5b496f114a8e12-7585494315315392173054.png" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;