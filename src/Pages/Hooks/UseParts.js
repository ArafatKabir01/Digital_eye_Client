import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [allParts , setParts] = useState([])
    useEffect(()=>{
        fetch('https://secure-woodland-36445.herokuapp.com/allParts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setParts(data)})

    },[])
    return [allParts , setParts]
};

export default UseParts;