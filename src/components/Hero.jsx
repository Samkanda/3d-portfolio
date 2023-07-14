import React from 'react'
import {motion} from "framer-motion"


export const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>
       <h1 className=' font-mono text-xl font-bold text-gray-400 mb-2'>Introduction</h1>
       <div className=' w-36 h-2 rounded-lg bg-[#262626] '></div>
        <p className='mt-4 text-gray-200'>
        Hello, I'm a Senior Web Developer with expertise in AI-powered web development, frontend development, and user experience. 
        Throughout my career, I have contributed to various projects and gained experience working with cutting-edge technologies such as Next.js, 
        React, Grapes.js, and Directus. Currently, I am working as a Senior Web Developer at Hexigon Company, where I led the development of a 
        prototype AI-powered web builder. My responsibilities include collaborating with cross-functional teams to define the product vision, 
        developing scalable web applications, integrating drag-and-drop page builders, leveraging headless CMS solutions, and implementing AI 
        and machine learning features.
        </p>
        <h1 className=' mt-10 text-xl font-bold'>What I'm Doing</h1>

        <div className=' mt-5 gap-4 grid grid-cols-2 grid-rows-2'> 
            <div className='p-5 bg-[#262626]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>Web Design</h1>
              <p>Creating design mockups for mobile and desktop applications</p>
            </div>
            <div className='p-5 bg-[#262626] shadow-2xl shadow-black rounded-xl  text-white'>
            <h1 className=' font-bold text-xl mb-2'>Web Development</h1>
              <p>Using the latest technologies to create web applications</p>
            </div>

            <div className='p-5 bg-[#262626]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>Mobile Apps</h1>
              <p>Using the latest technologies to create web applications</p>
            </div>
            <div className='p-5 bg-[#262626]  shadow-2xl shadow-black rounded-xl 
            bg-gradient-to-r  text-white'>
              <h1 className=' font-bold text-xl mb-2'>3D Animation</h1>
              <p>Implementing 3D models through the use of blender and three.js</p>
            </div>
        </div>
    </section>
  )
}
