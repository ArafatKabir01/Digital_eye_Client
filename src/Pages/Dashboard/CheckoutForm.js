
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseCart from '../Hooks/UseCart';
import { UserContext } from '../Shared/ContextUser';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();
    const { price, _id, email, productId, availableQuantity, quantity } = orders[0]
    console.log(availableQuantity, quantity, email, _id)
    const { setNewUser, newUser } = useContext(UserContext)
    const updateAvailableQuantity = ~~availableQuantity - ~~quantity
    console.log(productId)
    useEffect(() => {
        fetch('https://manufacturer-0397.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true);
        // confirem card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);

            setSuccess('Congrats! Your payment is completed.')

            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://manufacturer-0397.onrender.com/buying/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {

                    setProcessing(false);
                    console.log(data);


                })
        }
    }
    if (success) {
        const productInfoData = {
            availableQuantity: updateAvailableQuantity,
        }
        fetch(`https://manufacturer-0397.onrender.com/product/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfoData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
                const updateQuantity = {
                    availableQuantity : updateAvailableQuantity,
                    productId : productId 
                } 
                fetch(`https://manufacturer-0397.onrender.com/orderUpdate`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateQuantity)
        
                    })
                        .then(res => res.json())
                        .then(data => { 
                           console.log(data)
        
                        })
                        toast.success('Payment successfull', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
        setNewUser(true)
        navigate(`/dashboard/myOrder`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-secondary m-2' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-900'>{cardError}</p>

            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;