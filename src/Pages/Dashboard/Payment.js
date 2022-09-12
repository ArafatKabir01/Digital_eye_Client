import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51LfiUIIj1Rdiz6xlLD0vk4bSxe71VHtlf6ixWP5XOmfCoZ5mGznD48jxMBy8RVuyG11rlXsAEzTRhw8p4TjMu8mr00vSizzLCb');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myOrder/${id}`;

    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(orders)



    const { quantity, price, title } = orders[0]
    const total = quantity * price + 100
    return (
        <div>

            <div className="text-center lg:text-left">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>Quantity : {quantity}</p>
                        <p>Unite Price : {price}$</p>
                        <p>Shipping Cost 100$</p>
                        <p>Total Amount : {total}$</p>

                    </div>
                </div>
            </div>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders}  />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;