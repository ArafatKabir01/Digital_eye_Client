import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import './CameraParts.css'

import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
const CameraParts = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const axios = require('axios');
    const navigate = useNavigate();
    const { data: allParts , isLoading, refetch } = useQuery('allParts', () => fetch('https://manufacturer-0397.onrender.com/allParts', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   

    if (isLoading) {
        return <Loading />
    }
    const navigateToProductInfo = id => {
        navigate(`/newpurchase/${id}`)
    }

    return (
        <div  className='h-screen '>
            <h2 className='text-5xl font-bold text-yellow-500 text-center mb-8 pt-12 '>NEW ARRIVLE</h2>
            <div className='grid grid-cols md:grid-cols-4 lg:grid-cols-4 justify-items-center gap-2'>
                {
                    allParts?.map(parts => <div className="glassBox my-5">
                        <div className="glassBox__imgBox">
                            <img src={parts?.images[0]} alt="" />
                        </div>
                        <div >
                            <div data-aos="fade-down-right" className="">
                                <div className='h-32 '>
                                    <h2 className=" h-10 text-amber-400 px-3 glassBox__title">{parts?.title}</h2>
                                    <div className='w-64 font-bold p-4 my-5 h-20 text-amber-500 leading-6 text-center'>
                                        <p>Price : {parts?.price}$</p>
                                        {parts?.availableQuantity <10 ? <p className='text-red-700'>Stock Out</p> : <p>Available quantity : {parts?.availableQuantity} pieces</p>}
                                    </div>
                                </div>
                                <div className="card-actions my-4 justify-end h-16">
                                <button onClick={() => navigateToProductInfo(parts?._id)} className="btn btn-sm m-5 my-2">See details</button>
                                
                                </div>
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