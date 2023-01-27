import React from 'react'
import vdo from '../../videos/3D_product.mp4'
const Banner2 = () => {
  return (
    <div data-aos="zoom-in" >
        <video className='w-screen py-20 lg:py-0' src={vdo} autoPlay loop muted></video>
    </div>
  )
}

export default Banner2