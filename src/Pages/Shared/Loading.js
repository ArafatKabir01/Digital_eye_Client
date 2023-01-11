import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="lds-ripple h-screen z-20"><div></div><div></div></div>
                </div>
            </div>

        </div>
    );
};

export default Loading;