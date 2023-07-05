import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AiFillApple, AiOutlineWifi} from "react-icons/ai";
import {BsBatteryFull, BsFillHddStackFill} from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";




const Navbar = ({setModalOpen, modalOpen}) => {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  return (
    <nav className= "w-full flex h-10 px-2 items-center fixed top-0 hstack justify-between z-20 text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition ">
     <div className=' inline-flex items-center  '>
     <div className=' items-center space-x-1 h-6 cursor-default  inline-flex px-2'>
        <span className=' text-2xl  space-x-1 h-8 px-1 cursor-default rounded inline-flex 
        hover:bg-gray-100/30 hover:dark:bg-gray-400/40 items-center '>
            <AiFillApple/>
        </span>
        <h1 className='  text-base hstack space-x-1  px-1 cursor-default rounded inline-flex items-center
        hover:bg-gray-100/30 hover:dark:bg-gray-400/40'> 
            Kanda</h1>
        </div>
     </div>
     <div className='text-2xl inline-flex items-center '>
        <div className='hidden sm:inline-flex text-base'>100%</div>
        <div className='hidden sm:inline-flex  text-xl pl-4'>     <BsBatteryFull/></div>
        <div className='text-xl pl-4'>     <AiOutlineWifi/></div>
        <div className='hidden sm:inline-flex  text-lg pl-4'>     <SlMagnifier/></div>
        <div className='text-xl pl-4'>     <BsFillHddStackFill/></div>
        <div className='cursor-pointer text-base px-3 ml-2 rounded-md hover:bg-gray-100/30 hover:dark:bg-gray-400/40' onClick={() => setModalOpen(!modalOpen)}> Sun Jun {day} 10:00 PM </div>
     </div>
    </nav>
  )
}

export default Navbar