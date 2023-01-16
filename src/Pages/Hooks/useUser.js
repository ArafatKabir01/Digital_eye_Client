import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const url = `https://manufacturer-0397.onrender.com/users`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
            setUsers(data)
        }
        getUsers()
        
    }, [])
    return [users , setUsers ]
};

export default useUser ;