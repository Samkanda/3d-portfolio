import React , {useState, useRef} from 'react'
import { Hero } from './Hero'
import { About } from './About';
import { Projects } from './Projects';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {onResize} from '../helpers/functions'
import {BsCodeSlash, BsListTask, BsBriefcase} from "react-icons/bs";
// import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/Md";

const Window = ({setOpen}) => {
  const [tab, setTab] = useState("Intro");
  const container = useRef()
  const [isDragging, setIsDragging] = useState(true)

  return (
    <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 30}}
    position={!isDragging? { x: 0, y: -15 } : undefined}
    scale={1}
    bounds=".EmbedContainer"
    // onStart={position={ x: 0, y: 0 }}
    // onDrag={handleDrag}
    // onStop={handleStop}
    >
    <div ref={container} className=' overflow-hidden h-full w-4/5 sm:h-[34rem] resize 
    pb-10 bg-slate-600 rounded-t-lg max-w-full max-h-full'>
    <div  className=" handle outer p-2 pl-4 dark opacity-90 w-full rounded-[7px_7px_0px_0px];
    background: #b4b4b4">
        <div className="dot bg-red-500" onTouchStart={(e) =>  setOpen(false)}  onClick={()=> setOpen(false)}></div>
        <div className="dot bg-yellow-300"></div>
        <div className="dot bg-green-500" onTouchStart={(e) => (onResize(container),setIsDragging(!isDragging))}  onClick={() => (onResize(container),setIsDragging(!isDragging)) }></div>
       <div className=' inline-block'>
        {/* <div className='flex gap-4 ml-32'>
        <MdArrowBackIosNew/>
        <MdArrowForwardIos/>
        <h1>Macintosh HD -- Introduciton</h1>
        </div> */}
        
      </div> 
    </div>
        <div className='h-full flex flex-col sm:flex-row'>
          <div className='left bg-[#262626] text-sm text-gray-400 min-w-[10rem] h-48 sm:h-full'>
          <h1 className='sm:flex text-sm mt-2 hidden items-center opacity-80 px-4' onTouchStart={(e) =>  setTab("Intro")} onClick={() => setTab("Intro")}>
          Favorites
          </h1>
          <div className='ml-2'>
            <h1 className='flex  items-center  gap-2 interaction cursor-pointer px-4 py-4 hover:font-bold' onTouchStart={(e) =>  setTab("Intro")} onClick={() => setTab("Intro")}>
              <BsCodeSlash/> Introduction
               </h1>
            <h1 className='flex items-center gap-2 interaction cursor-pointer mx-4 py-4 hover:font-bold' onTouchStart={(e) =>  setTab("About")} onClick={() => setTab("About")}> 
              <BsListTask/>Resume
            </h1>
            <h1 className='flex items-center gap-2 interaction cursor-pointer mx-4 my-4 hover:font-bold' onTouchStart={(e) =>  setTab("Projects")} onClick={() => setTab("Projects")}> 
              <BsBriefcase/> Projects
            </h1>
            {/* <h1 className='flex items-center gap-2 interaction cursor-pointer mx-4 py-4 hover:font-bold' onTouchStart={(e) =>  setTab("Contact")} onClick={() => setTab("Contact")}> 
              <BsListTask/>Contact
            </h1> */}
          </div>
          </div>
          <div className='right interaction pb-20 sm:pb-10  p-4 bg-[#1C1C1C] w-full h-full overflow-auto '>
            {tab === "Intro" && <Hero />} 
            {tab === "About" && <About />} 
            {tab === "Projects" && <Projects />} 
          </div>
        </div>
    </div> 
    </Draggable>
  )
}

export default Window