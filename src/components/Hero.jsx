import React from 'react'
import {motion} from "framer-motion"


export const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>
       <h1 className=' font-mono text-6xl mb-2'>Intro</h1>
       <div className=' w-40 h-2 rounded-lg bg-[#915EFF] '></div>
        <p className='mt-4'>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development 
          and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          My job is to build your website so that it is functional and user-friendly but at the same time 
          attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. 
          My aim is to bring across your message and identity in the most creative way. I created web design for many famous 
          brand companies.
        </p>
        <div className=' mt-10 '> 
          <h1 className=' text-xl font-bold'>What I'm Doing</h1>
          <div className='flex mt-5 justify-between gap-4'>
            <div className='p-5 bg-[#273138]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>Web Design</h1>
              <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web developm</p>
            </div>
            <div className='p-5 bg-[#273138] shadow-2xl shadow-black rounded-xl  text-white'>
            <h1 className=' font-bold text-xl mb-2'>Web Development</h1>
              <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web developm</p>
            </div>
            </div>
            <div className='flex mt-5 justify-between gap-4'>

            <div className='p-5 bg-[#273138]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>Mobile Apps</h1>
              <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web developm</p>
            </div>
            <div className='p-5 bg-[#273138]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>3D Animation</h1>
              <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web developm</p>
            </div>
          </div>
        </div>
    </section>
  )
}
