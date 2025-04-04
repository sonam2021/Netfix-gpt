import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  

  useEffect(()=>{
   const unsubscribed =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribed();
  }, [])
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44' src={LOGO} alt='logo'/>
        {user && 
        <div className='flex items-center'>
          <img className='p-1 rounded-full w-[32] h-[32] mx-2' alt='usericon' src={user?.photoURL}/>
          <button onClick={handleSignOut} className='bg-white rounded-lg py-1 px-2 font-black border-0 m-0 w-[100px] h-[40px]'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;