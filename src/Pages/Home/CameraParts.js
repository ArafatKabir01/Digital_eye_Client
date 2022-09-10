import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import UseParts from '../Hooks/UseParts';


const CameraParts = () => {
    const [allParts , setParts] = UseParts([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const navigateToProductInfo = id =>{
        navigate(`/purchase/${id}`)

    }
    const [admin] = useAdmin(user);
    return (
        <div  className='bg-base-200 '>
            <h2 className='text-5xl font-bold text-center mb-8 pt-12'>Camera Parts</h2>
            <div className='container m-auto  flex flex-wrap gap-4 justify-center pb-8'>
            {
                allParts.map(parts =>  <div  className="card hover:-translate-y-6 duration-700	 card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-80 w-full' src={parts.img} alt="Shoes" /></figure>
                <div data-aos="fade-down-right"   className="card-body">
                    <h2 className="card-title">{parts.title}</h2>
                    <p>{parts.details}</p>
                    <div className='w-50 h-50 font-bold	leading-6 text-white'>
                        <p>Price : {parts.price}$</p>
                        <p>Minimum Order Quantity : {parts.minQuantity} pic</p>
                        <p>Available quantity : {parts.availableQuantity} pic</p>
                    </div>
                    <div className="card-actions justify-end">
                        {!admin && <button onClick={()=> navigateToProductInfo(parts._id)} className="btn btn-primary">Buy Now</button>}
                    </div>
                </div>
            </div>

                )
            }
            
        </div>
        </div>
    );
};

export default CameraParts;