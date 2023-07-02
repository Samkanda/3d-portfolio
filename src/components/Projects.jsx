import React from 'react'
import {motion} from 'framer-motion'
import {works} from '../constans/constans.jsx'
import github from '../icons/github.png'
import { Slider } from './Slider.jsx'

export const Projects = () => {
  console.log(works)

  return (
    <div className='flex flex-col items-center'>
      <div className=''>
        <motion.div>
            <p className='sm:text-[18px] text-[14px] text-gray-400  uppercase tracking-wider'>My Work</p>
            <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects</h2>
        </motion.div>

        <div className='w-full flex max-w-7xl '>
            <motion.p className='mt-4 text-[17px] leading-[30px]'>
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. 
            </motion.p>
        </div>

      <div className='mt-20 gridCard'>
        {works.map((work, index) => ( 
          <ProjectCards key={index} index={index} {...work} />
        ))}
      </div>
     
    </div>
    </div>
  )
}

const ProjectCards = ({index, name, description, tags, image, links, source_code_link}) => (
    <div className='  bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
            {/* <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            /> */}
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
