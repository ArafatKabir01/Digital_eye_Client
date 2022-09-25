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
          
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;