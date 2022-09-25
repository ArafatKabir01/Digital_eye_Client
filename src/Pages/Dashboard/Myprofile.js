import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h2>My profile</h2>
            <div className="avatar p-8 gap-4 ">
                <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                </div>
                <h2 className="card-title ps-4">{user.displayName}</h2>
                <button className="btn btn-primary">Button</button>
            </div>
        </div>
    );
};

export default Myprofile;