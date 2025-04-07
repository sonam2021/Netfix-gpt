import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGAUGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    // toggle my gpt search
  }
  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));

  }
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44' src={LOGO} alt='logo'/>
        {user && 
        <div className='flex items-center'>
          {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2 z-20' onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGAUGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
          </select>}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg z-20' onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          <img className='p-1 rounded-full w-[32] h-[32] mx-2' alt='usericon' src={user?.photoURL}/>
          <button onClick={handleSignOut} className='bg-white rounded-lg py-1 px-2 font-black border-0 m-0 w-[100px] h-[40px]'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;