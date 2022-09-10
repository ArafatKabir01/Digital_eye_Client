import React from 'react';
import './ad.css'


const Ad = () => {
    return (
        <>
            <div className='flex content-center gap-5 justify-items-center  justify-center  ad-card'>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" style={{ backgroundImage: "url('https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aQIVEfvQ997L3sEHoBd-VCJRKp0azfIGIA2qjHVulZXiEO1kIf-SI/Views/4808_SB-700-AF-Speedlight-front.png')" }} className='ad-cardBody bg-indigo-900	card-bg		 text-white bg-contain bg-right	bg-opacity-50	bg-no-repeat	'>
                    <div class="card-body text-2xl	">
                        <h2 class="card-title text-4xl	">Flash</h2>
                        <h2 class="card-title font-bold text-4xl 		">Light</h2>
                        <p className='mt-8'>Save Up To 35%</p>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" style={{ backgroundImage: "url('https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aQIVEfvQ997L3sEHoBd-VA5RL1Ci1YeaevjJDCS4t0404pbc6kyBwejw8r1EgZ2o9wj--w2jUp12hGguYzMTI/Views/4803_R1C1-Wireless-Close-Up-Speedlight-System_front.png')" }} className='ad-cardBody bg-indigo-900 	card-bg	 text-white bg-contain bg-right	bg-opacity-50	bg-no-repeat	'>
                    <div class="card-body text-2xl	">
                        <h2 class="card-title text-4xl	">Dual Flash</h2>
                        <h2 class="card-title font-bold text-4xl 		">Light</h2>
                        <p className='mt-8'>Save Up To 45%</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Ad;