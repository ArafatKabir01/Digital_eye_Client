import React from 'react';

const ContractUs = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/vectors/abstract-world-map-digital-texture-pattern-technology-innovation-vector-id597938858?k=20&m=597938858&s=170667a&w=0&h=AT3p6fi99plwdrJV2AMoG-twDWtT7dakEHzWtqfhWeo=")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div  class="hero min-h-screen bg-opacity-60 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-white	">Contract With Us</h1>
                        
                    </div>
                    <div class="card border-2  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <textarea class="textarea textarea-primary" placeholder="Text"></textarea>
                            </div>
                            
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
       
    );
};

export default ContractUs;