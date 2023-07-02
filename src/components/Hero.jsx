import React from 'react'
import {motion} from "framer-motion"


export const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>
       <h1 className=' font-mono text-6xl mb-2'>Intro</h1>
       <div className=' w-40 h-2 rounded-lg bg-[#915EFF] '></div>
        <p className='mt-4'>
        Hello, I'm a Senior Web Developer with expertise in AI-powered web development, frontend development, and user experience. 
        Throughout my career, I have contributed to various projects and gained experience working with cutting-edge technologies such as Next.js, 
        React, Grapes.js, and Directus. Currently, I am working as a Senior Web Developer at Hexigon Company, where I led the development of a 
        prototype AI-powered web builder. My responsibilities include collaborating with cross-functional teams to define the product vision, 
        developing scalable web applications, integrating drag-and-drop page builders, leveraging headless CMS solutions, and implementing AI 
        and machine learning features.
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
