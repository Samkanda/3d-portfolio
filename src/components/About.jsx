import React from 'react';
import {motion} from "framer-motion"
import { Tilt } from 'react-tilt';
import book from '../icons/book.svg'
import pencil from '../icons/pencil.svg'
import webpage from '../icons/webpage.svg'
import '../styles/card.scss'; 
export const About = () => {
    const details = [{title: "Web Developer", icon: book},  {title: "Designer", icon: pencil},  {title: "Backend", icon: webpage},]
  return (
    <div className='flex justify-center items-center p-10'>
        <div className=' w-[80rem]'> 
        <motion.div className=' '>
            <p className='sm:text-[18px] text-[14px] text-gray-400  uppercase tracking-wider'>Overview</p>
            <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Skills</h2>
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
            {/* {details.map((detail, index) => ( */}
                <Card />
            {/* ))} */}
        </div>
        </div>
    
    </div>
  )
}

const Card = ({index, title, icon}) => (
    <div className='cardBody max-w-7xl   text-purple-600'>
    <div className="cardContainer">
        <div className="card" >
            <div className="img-box">
                <img src={book}/>
            </div>
            <div className="content">
                <h2>Front-End</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" >
            <div className="img-box">
                <img src={pencil}/>
            </div>
            <div className="content">
                <h2>Back-End</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" >
            <div className="img-box">
                <img src={webpage}/>
            </div>
            <div className="content">
                <h2>Design</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
    </div>
    </div>
);

