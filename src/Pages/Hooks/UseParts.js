import React, { useEffect, useState } from 'react';

const UseParts = () => {
    const [allParts , setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allParts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setParts(data)})

    },[])
    return [allParts , setParts]
};

export default UseParts;