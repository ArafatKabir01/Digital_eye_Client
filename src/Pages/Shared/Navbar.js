import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const [user, loading, error] = useAuthState(auth);
  return (
    <div  >
      <div className="navbar mt-3 text-2xl z-10 bg-base-200 container rounded-lg fixed top-0 left-0 right-0  px-6 m-auto  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
              <li>
                < Link to="/">Home</ Link>

                <Link to='/blog'>Blog</Link>
                <Link to='/blog'>My Portfolio</Link>

                {user ? < Link to="dashboard">Dashboard</ Link> : <></>}

                {user ? <></> : <Link to='/login'>Login</Link>}
                {user ? <button onClick={logOut} class="btn btn-outline btn-primary mt-1">Log Out</button> : <Link to='/signup'>SignUp</Link>}

              </li>
            </ul>
          </div>
          <a className="  text-3xl font-bold  text-cyan-300			">DIGITAL EYE</a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu  menu-horizontal font-bold p-0">
            <li>
              < Link to="/">Home</ Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/blog'>My Portfolio</Link>

              {user ? < Link to="dashboard">Dashboard</ Link> : <></>}
              {user ? <></> : <Link to='/login'>Login</Link>}
              {user ? <button onClick={logOut} class="btn btn-outline btn-primary mt-1">Log Out</button> : <Link to='/signup'>SignUp</Link>}

            </li>

          </ul>
        </div>
        <div className="navbar-end">
          {user ? <p>{user.displayName}</p> : <></>}
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;