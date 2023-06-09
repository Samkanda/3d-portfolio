import React from 'react';
import {motion} from "framer-motion"
import '../styles/card.scss'; 

export const About = () => {
  return (
    <div>
    <section className='relative w-full mx-auto'>
    <h1 className=' font-mono text-xl font-bold text-gray-400 mb-2'>Experience</h1>
       <div className=' w-32 h-2 rounded-lg bg-[#262626] '/>
        <div className='pl-2 pt-10'>

        <ol class="relative border-l border-gray-200 dark:border-gray-700"> 
                    
    <li class="mb-10 ml-4 p-5 border-[#262626] border-dashed border-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-[#8ca7d2]">Hexigon - Senior Front-End Developer</h3>
        <p class="mb-4 text-base font-normal text-white dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
    </li>
    <li class="mb-10 ml-4 p-5 border-[#262626] border-dashed border-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-[#8ca7d2]">PlayLine - Lead Front-End Developer</h3>
        <p class="text-base font-normal text-white">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="mb-10 ml-4 p-5 border-[#262626] border-dashed border-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2021</time>
        <h3 class="text-lg font-semibold text-[#8ca7d2]">RealtyShop - Front-End Developer/Designer</h3>
        <p class="text-base font-normal text-white">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>
</div>
    </section>
       <h1 className=' font-mono text-xl font-bold text-gray-400 mb-2'>Skills</h1>
        <div className=' w-24 h-2 rounded-lg bg-[#262626] '/>       <div className='gap-2'>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>HTML</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>CSS</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>JavaScript</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>React</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Three.JS</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>JQuery</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Directus</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>SQL</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Next.JS</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Git</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Webflow</h1>
            <h1 className='p-2 mr-5 mt-5 inline-flex justify-center border-[#262626] border-dashed border-4'>Wordpress</h1>
        </div>
</div>
  )
}


