import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import img1 from '../../Images/Login_Imgs/wave.png'
import img2 from '../../Images/Login_Imgs/undraw_drone_surveillance_kjjg.svg'
import img3 from '../../Images/Login_Imgs/undraw_videographer_re_11sb.svg'
import axios from 'axios';
import useTokens from '../Hooks/useTokens';
const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useTokens(user || guser)
    let errorLogin;
    let cheqLoading;
    if (error || gerror) {
      errorLogin = <p className='text-red-600'>{error?.message || gerror?.message }</p>
    }
    if (loading || gloading) {
        cheqLoading = <div className='ml-auto mr-auto mt-2'><button className="btn btn-square  loading"></button></div>;
    }
    if (token) {
        navigate(from, { replace: true }); 
        
    }
 
    const onSubmit = async info => {
        // console.log(info.email);
        // const email = info.email
        // const {data} = await axios.post('https://manufacturer-0397.onrender.com/login' , {email})
        // console.log(data)
        signInWithEmailAndPassword(info.email , info.password)
        // localStorage.setItem("accessToken" , data)  
        
    }

    

    return (
        <div>
            <section>
                <img class="wave" src={img1} />
                <div class="login-container">
                    <div class="img">
                        <img src={img2} />
                    </div>
                    <div class="login-content">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} action="index.html">
                                <img src={img3} />
                                <h2 className='text-5xl text-white font-bold text-center mb-8 pt-12'>Welcome</h2>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='Your Email' {...register("email", { required: true, maxLength: 20 })} type="email" class="input" />
                                        {errors.email?.type === 'required' && "Email is required"}
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='Password' {...register("password", { required: true, maxLength: 20 })} type="password" class="input" />
                                        {errors.password && "Password is required"}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <Link to='/signup' className='login-link' >Do not have account?</Link>
                                    <a className='login-link' href="#">Forgot Password?</a>

                                </div>

                                <input type="submit" class="login-btn" value="Login" />
                                {errorLogin}
                                {cheqLoading}
                                <div className="divider">OR</div>
                            </form>
                            <div className="form-control p-4 ">
                                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-warning">Google Login</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;