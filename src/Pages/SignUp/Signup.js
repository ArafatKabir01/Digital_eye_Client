import React from 'react';
import { useForm } from "react-hook-form";
import img1 from '../../Images/Login_Imgs/wave.png'
import img2 from '../../Images/Login_Imgs/undraw_drone_surveillance_kjjg.svg'
import img3 from '../../Images/Login_Imgs/undraw_videographer_re_11sb.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UseToken from '../Hooks/UseToken';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth)
    const navigate = useNavigate()
    let errorLogin;
    let cheqLoading;
    console.log(user)

    const [token]  = UseToken(user || guser);

    if (error || gerror) {
        errorLogin = <p className='text-red-600'>{error?.message || gerror?.message}</p>
    }
    if (loading || gloading) {
        cheqLoading = <div className='ml-auto mr-auto mt-2'><button className="btn btn-square  loading"></button></div>;
    }
    if (token) {
        navigate(from, { replace: true });
    }

    let passwordError;
    const onSubmit = async data => {
        console.log(data)
        if (data.password === data.confirmPassword) {
            await createUserWithEmailAndPassword(data.email, data.password,)
            await updateProfile({ displayName: data.displayName })
            navigate('/')

        }
        else{
         passwordError = <p>Password Don't Match</p>
        }

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
                                {/* <img src={img3} /> */}
                                <h2 className='text-5xl text-white font-bold text-center mb-8 pt-12'>Welcome</h2>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='First Name' {...register("firstName", { required: true})} type="text" class="input" />
                                        {errors.displayName?.type === 'required' && "Name is required"}
                                    </div>
                                </div>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='Last Name' {...register("lastName", { required: true})} type="text" class="input" />
                                        {errors.displayName?.type === 'required' && "Name is required"}
                                    </div>
                                </div>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='E-mail' {...register("email", { required: true, maxLength: 20 })} type="email" class="input" />
                                        {errors.email?.type === 'required' && "Email is required"}
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='Password' {...register("password", { required: true, maxLength: 20 })} type="password" class="input" />
                                        {errors.password?.type === 'required' && "Password is required"}
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i">
                                        <i class="fas fa-lock"></i>
                                    </div>
                                    <div class="div">
                                        <input placeholder='Confirm Password' {...register("confirmPassword", { required: true, maxLength: 20 })} type="password" class="input" />
                                        {passwordError}
                                    </div>
                                </div>
                                <Link to='/login' className='login-link' >Already have an account?</Link>
                                <input type="submit" class="login-btn" value="SignUp" />
                                {errorLogin}
                                {cheqLoading}
                                {passwordError}
                                {passwordError}
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

export default Signup;