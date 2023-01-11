import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Navbar.css'
import Footer from './Footer';
import useAdmin from '../Hooks/useAdmin';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [cartItems, setCartItems] = useState(0);
  const [admin] = useAdmin(user)
  const orders = localStorage.getItem("totalOrder")
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
    localStorage.removeItem("totalOrder")
  }
  // useEffect(()=>{

  //   setCartItems(orders)

  // },[orders])

 


  return (
    <div>
      <div className='text-white'>
       
        <div className="navbar w-full container lg:fixed left-0 top-0  bg-no-repeat bg-cover text-xl z-10 h-24   top-0 left-0 right-0 m-auto">
          <div className="navbar-start  ">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52">
                <li>
                  < Link to="/">Home</ Link>

                  <Link to='/about'>About</Link>
                  <a href='https://effortless-dragon-4ad78d.netlify.app/ ' target="_blank" >Portfolio</a>

                  {user ? <></> : <Link to='/login'>Login</Link>}
                  

                </li>
              </ul>
            </div>
            <div className=' justify-items-center items-center w-80 h-26 flex'>
              <h1><a className=" p-3 md:p-7 lg:p-full inline-block align-middle text-[30%] font-bold  text-black 	">BASS BOSS</a></h1>
            </div>

          </div>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li >
                <Link to="/">Home</ Link>
                <Link to='/about'>About</Link>
                <a href='https://effortless-dragon-4ad78d.netlify.app/ ' target="_blank">Portfolio</a>
                {user ? <></> : <Link to='/login'>Login</Link>}

              </li>

            </ul>
          </div>
          <div className="navbar-end ">
            {admin && <h2 className='mx-2'>Admin</h2>}
            <div className="flex aling-center gap-2">
              { !admin && <div className= "dropdown dropdown-end ">
              
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{orders}</span>
                  </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">{orders}</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link to='/dashboard/myorder' className="btn btn-sm btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div> 
              
              }
              {
                user ? <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a className="justify-between">
                        Profile
                      </a>
                      <Link onClick={<Footer currentPage="dashboard"/>} to="dashboard">Dashboard</ Link>
                      <button onClick={logOut} className="mt-1">Log Out</button>
                    </li>

                  </ul>
                </div> : <></>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;