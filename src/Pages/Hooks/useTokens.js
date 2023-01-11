import { useEffect, useState } from 'react';

const useTokens = (user) => {
    const [token, setToken] = useState('');
console.log( user?.user?.email)
    useEffect(()=>{
        const email = user?.user?.email
        const gemail = user?.guser?.email
        const currentUser = {email : email || gemail}
        if(email || gemail){
            fetch(`https://manufacturer-0397.onrender.com/user/${email || gemail}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    },[user])

    return [token]
};

export default useTokens;



