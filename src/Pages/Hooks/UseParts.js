import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [allParts , setParts] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-0397.onrender.com/allParts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setParts(data)})

    },[])
    return [allParts , setParts]
};

export default UseParts;