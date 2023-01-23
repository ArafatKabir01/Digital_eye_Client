import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseCart = (cartApi) => {
    const [cartitems, setcartitems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(cartApi, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            const json = await res.json();
            setcartitems(json);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }
        useEffect(() => {
            fetchData();
        }, [cartApi]);

console.log(loading)

        return { cartitems, cartRefetch: fetchData, setValue: setcartitems, cartLoading: loading };
    
}
export default UseCart