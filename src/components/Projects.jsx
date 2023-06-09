import React from 'react'
import {motion} from 'framer-motion'
import {works} from '../constans/constans.jsx'
import github from '../icons/github.png'
import { Slider } from './Slider.jsx'

export const Projects = () => {
  console.log(works)

  return (
    <div className='flex flex-col'>
      <div className=''>
      <h1 className=' font-mono text-xl font-bold text-gray-400 mb-2'>Projects</h1>
       <div className=' w-36 h-2 rounded-lg bg-[#262626] '></div>

        <div className='w-full flex max-w-7xl '>
            <motion.p className='mt-4 text-[17px] leading-[30px]'>
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. 
            </motion.p>
        </div>

      <div className='mt-20 gridCard justify-items-center'>
        {works.map((work, index) => ( 
          <ProjectCards key={index} index={index} {...work} />
        ))}
      </div>
     
    </div>
    </div>
  )
}

const ProjectCards = ({index, name, description, tags, image, links, source_code_link}) => (
    <div className='bg-[#1F2937]  p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
            <Slider image={image}/>

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
                <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
                />
            </div>
            </div>
        </div>

        <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] '>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className='flex flex-col items-end justify-end text-base font-mono '>
        {links.map((info,i) => (
          <h1 key={i} className={`text-[14px] ${info.color}`}>
            {info.link == "" ? info.name: <a href={info.link}>{info.name}</a> }
          </h1>        
          ))}
        </div>
    </div>
)
