import React, {useEffect, useState} from 'react';
import {AiFillApple, AiOutlineWifi} from "react-icons/ai"; 
import {BiBluetooth} from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl"; 
import {BsFillMoonFill,  BsGear, BsFullscreen, BsWifi, BsWifiOff, BsFillHddStackFill, BsBatteryFull, BsFillAirplaneFill } from "react-icons/bs"; 
import { Slider } from "@material-tailwind/react";

const Navbar = ({setModalOpen, modalOpen}) => {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [open, setOpen] = useState(false)
  return (
    <nav className= "w-full flex h-10 px-2 items-center fixed top-0 justify-between z-20 text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition ">
     <div className=' inline-flex items-center  '>
     <div className=' items-center space-x-1 h-6 cursor-default  inline-flex px-2'>
        <span className=' text-xl  space-x-1 h-8 px-1 cursor-default rounded inline-flex 
        hover:bg-gray-100/30 hover:dark:bg-gray-400/40 items-center '>
            <AiFillApple/>
        </span>
        <h1 className='  text-base  space-x-1  px-1 cursor-default rounded inline-flex items-center
        hover:bg-gray-100/30 hover:dark:bg-gray-400/40'> 
            Kanda</h1>
        </div>
     </div>
     <div className='text-2xl inline-flex items-center '>
        <div className='hidden sm:inline-flex text-base'>100%</div>
        <div className='hidden sm:inline-flex  text-xl pl-4'>     <BsBatteryFull/></div>
        <div className='text-xl pl-4'>     <AiOutlineWifi/></div>
        <div className='hidden sm:inline-flex  text-lg pl-4'>     <SlMagnifier/></div>
        <div className='text-xl pl-4 cursor-pointer'  onClick={() => setOpen(!open)}>     <BsFillHddStackFill/></div>
        {open ? 
        <div class=" bg-[#1f2937b3] fixed grid grid-cols-4 gap-2 grid-rows-4 
        w-80 h-80 max-w-full  top-12 right-0 sm:right-1.5 p-2.5 rounded-2xl shadow-gray-900 shadow-xl">
        <div className=' p-2 col-span-2 row-span-2 bg-[#374151cc] rounded-xl'>
          <div className='flex gap-2 mb-3' >
          <div className=' relative rounded-full bg-[#459CFF] w-8  h-8'>          
            <div className=' absolute left-[6px] top-[5px] text-[1.3rem]'><BsWifi/></div>
          </div>
          <div>
          <p className=' text-xs font-bold '>Wi-Fi</p>
          <p className=' text-xs'>Nav's Internet</p>
          </div>
          
          </div>
          <div className='flex gap-2 mb-3'>
          <div className=' relative rounded-full bg-[#459CFF] w-8  h-8'>
          <div className=' absolute left-[5px] top-[5px] text-[1.3rem]'><BiBluetooth/></div>

          </div>
          <div>
          <p className=' text-xs font-bold '>Bluetooth</p>
          <p className=' text-xs'>On</p>
          </div>
          
          </div>
          <div className='flex gap-2'>
          <div className=' relative rounded-full bg-[#459CFF] w-8  h-8'>
            <div className=' absolute left-[7px] top-[5px] text-[1.2rem]'><BsFillAirplaneFill/></div>
          </div>
          <div>
          <p className=' text-xs font-bold '>Air Mode</p>
          <p className=' text-xs'>On</p>
          </div>
          
          </div>
        </div> 
        <div className='col-span-2 bg-[#374151cc] rounded-xl flex items-center '>
          <div className='flex ml-2 gap-2 items-center' >
          <div className='relative  rounded-full bg-[#459CFF] w-8  h-8'>
          <div className=' absolute left-[8px] top-[6px] text-[1.1rem]'><BsFillMoonFill/></div>

          </div>
            <p className=' text-sm font-bold '>Dark Mode</p>
          </div>
        </div> 
        <div className='bg-[#374151cc] rounded-xl flex flex-col items-center justify-center gap-2 p-2'>
          <div className=' text-xl'><BsGear/></div>
          <p className='text-xs'>Settings</p>
          </div> 
          <div className='bg-[#374151cc] rounded-xl flex flex-col items-center justify-center gap-2 p-2'>
          <div className=' text-xl'><BsFullscreen/></div>
          <p className='text-xs'>FullScreen</p>
          </div>         <div className='bg-[#374151cc] rounded-xl col-span-4 p-2'>
          <p className=' text-lg font-bold mb-1'>Display</p>
          <Slider size="lg" color='gray' className='slider' defaultValue={100} />
        </div>
        <div className='bg-[#374151cc] rounded-xl col-span-4 p-2'> 
          <p className=' text-lg font-bold mb-1'>Sound</p>
          <Slider size="lg" color='gray' className='slider' defaultValue={100} />
        </div>
        </div>
        : ""}
        <div className='cursor-pointer text-sm sm:text-base px-3 ml-2 rounded-md hover:bg-gray-100/30 hover:dark:bg-gray-400/40' onClick={() => setModalOpen(!modalOpen)}> Sun Jun {day} 10:00 PM </div>
     </div>
    </nav>
  )
}

export default Navbar