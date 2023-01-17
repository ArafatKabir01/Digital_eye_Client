import { useEffect, useState } from "react";


const useAdmin = user => {
    console.log(user)
    const [admin , setAdmin] = useState(true)
    const [adminLoading, setAdminLoading] = useState(false);
    
    useEffect(()=>{
        const email = user?.email;
        setAdminLoading(true)
        if(email){
            fetch(`https://manufacturer-0397.onrender.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                if(data?.role === "admin"){
                    setAdmin(true);
                    setAdminLoading(false);
                }else{
                    setAdmin(false);
                }
                
            })
        }
console.log(admin)
    },[user])
    return [admin ,adminLoading ]
   
};

export default useAdmin;