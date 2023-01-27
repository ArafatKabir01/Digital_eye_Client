import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Navbar.css'
import Footer from './Footer';
import useAdmin from '../Hooks/useAdmin';
import useUser from '../Hooks/useUser';
import UseSingleUser from '../Hooks/UseSingleUser';
import Loading from './Loading';
import { UserContext } from './ContextUser';
import UseCart from '../Hooks/UseCart';
const Navbar = () => {
  const [user, error] = useAuthState(auth);
  const [newData, setNewData] = useState()
  const [admin] = useAdmin(user)
  const email = user?.email
  const userApi = `https://manufacturer-0397.onrender.com/userInfo/${email}`
  let { users, loading, userRefetch, setValu } = UseSingleUser(userApi)
  const { setNewUser, newUser } = useContext(UserContext)
  const cartApi = `https://manufacturer-0397.onrender.com/myOrder?email=${email}`
  let { cartitems, cartLoading, cartRefetch, setValue } = UseCart(cartApi)
  console.log(cartitems)
  useEffect(() => {
    if (newUser === true) {
      userRefetch()
      cartRefetch()
      setNewUser(false)
    }
  }, [newUser])

  if (loading) {
    return <Loading />
  }


  const logOut = () => {
    cartRefetch()
    signOut(auth)
    localStorage.removeItem('accessToken')
  }

  console.log(cartitems.length)

  const filterCart = cartitems.filter(value => {
    if (value.price && !value.paid) {
      return value;
    }
  })
  console.log(filterCart.length)
  return (
    <div>
      <div className='text-white z-20'>

        <div className="navbar navBlur px-4 lg:px-52 w-full  fixed left-0 top-0  bg-no-repeat bg-cover text-xl z-10 h-16  top-0 left-0 right-0 m-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabindex="0" className="btn btn-ghost lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100  rounded-box w-52">
                <li>
                  < Link to="/">Home</ Link>
                  <Link to='/about'>About</Link>
                  <a href='https://effortless-dragon-4ad78d.netlify.app/ ' target="_blank" >Portfolio</a>

                  {user ? <></> : <Link to='/login'>Login</Link>}


                </li>
              </ul>
            </div>
            <div className=' justify-items-center items-center w-80 h-26 flex'>
              <Link to='/'><h1 className='p-0 md:p-7 lg:p-7 inline-block align-middle text-[20px] lg:text-[40px] font-bold'>BASS BOSS</h1></Link>
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
            {admin && user ? <h2 className='mx-2'>Admin</h2> : <></>}
            <div className="flex aling-center gap-2">
              {!admin || !user ? <div className="dropdown dropdown-end ">

                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{!user ? 0 : filterCart?.length}</span>
                  </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg"></span>
                    <div className="card-actions">
                      <Link to='/dashboard/myorder' className="btn btn-sm btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div> : <></>

              }
              {
                user ? <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={users?.images ? users?.images : user?.photoURL} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link to="/dashboard/myprofile"><a className="justify-between">
                        Profile
                      </a></Link>

                      <Link to="/dashboard">Dashboard</ Link>
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