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
        <div class="hero svg  ">
        <div class="hero-content text-center">
        <div className="container m-auto mb-1 md:mb-10 lg:mb-36 top-5">
            <br/>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/><br/>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 50,
                    shadowScale: 1.54,
                }}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                pagination={true}
                modules={[Autoplay, EffectCube, Pagination]}

                className="mySwiper"
            >
                <SwiperSlide className="swiper-s">
                        <div className="hero ">
                        <div className="hero-content w-full md:w-screen lg:w-screen flex-col lg:flex-row-reverse">
                            <img src="https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/13533_D7200_v2.png" className="" />
                            <div className="swiper-text w-full">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                        </div>
                    
                </SwiperSlide>
                <SwiperSlide >
                <div className="hero ">
                        <div className="hero-content w-full md:w-screen lg:w-screen flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/jgrjcLQ/pngegg-2.png" className="" />
                            <div className="swiper-text">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">Nikon Cinema EOS 8K</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                        </div>
                    
                </SwiperSlide>
                <SwiperSlide >
                <div className="hero ">
                        <div className="hero-content w-full md:w-screen lg:w-screen flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/pjWLC6m/kisspng-nikon-d3200-nikkor-camera-lens-prime-lens-camera-flyer-5b496f114a8e12-7585494315315392173054.png" className="" />
                            <div className="swiper-text">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold">Canon all Lance</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                        </div>
                    
                </SwiperSlide>
            </Swiper>
            
        </div>
        </div>
      </div>
    );
};

export default Banner;