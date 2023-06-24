import React from 'react'
import {motion} from "framer-motion"


export const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>
        <div className='  max-w-7xl mx-auto flex flex-row items-start gap-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915EFF'/>
                <div className='w-1 sm:h-80 h-40 violet-gradient'/>
            </div>
            <div className=''>
                <h1 className='text-white text-4xl font-mono font-bold' >
                    Hi, I'm <span className='text-[#915EFF]'> Navpreet </span>
                </h1>
                <p className=' mt-2  text-xl text-white font-mono'>
                    I developer 3D visuals, user interfaces and web applications
                </p>
            </div>
        </div>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      </div>
    </section>
  )
}
