import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({myOrder}) => {
    // const elements = useElements();
    // const [carderror, setCarderror] = useState('')
    
    // const {price} = myOrder;
    // console.log(price)
    
    // const [clientSecret, setClientSecret] = useState("");
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //       method: "POST",
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({price}),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, [{price}]);
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!elements || !stripe) {
    //         return
    //     }
    //     const card = elements.getElement(CardElement);
    //     if (card == null) {
    //         return;
    //     }
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //     });
    //     if (error) {
    //         setCarderror(error.message)
    //     }
    //     else {
    //         setCarderror('')
    //     }


    // }
    const stripe = useStripe()
    return (
        <>
        {/* onSubmit={handleSubmit} */}
            <form >
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
                <button className='btn btn-ghost btn-xs' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                // carderror && <p>{carderror.message}</p>
            }
        </>
    );
};

export default CheckoutForm;