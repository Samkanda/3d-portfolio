import React , {useState, useRef} from 'react'
import { Hero } from './Hero'
import { About } from './About';
import { Projects } from './Projects';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {onResize} from '../helpers/functions'
import {BsFillTagFill, BsCodeSlash, BsListTask, BsBriefcase} from "react-icons/bs";
import {MdViewColumn, MdArrowBackIosNew, MdArrowForwardIos, MdGridView, MdIosShare, MdFormatListBulleted, MdApps} from "react-icons/md";
import { SlMagnifier } from "react-icons/sl"; 

const Window = ({setOpen}) => {
  const [tab, setTab] = useState("Intro");
  const container = useRef()
  const [isDragging, setIsDragging] = useState(true)

  return (
    <Draggable
    axis="both"
    handle=".handle"
    cancel={".interaction"}
    defaultPosition={{x: 0, y: 30}} 
    position={!isDragging? { x: 0, y: -15 } : undefined}
    scale={1}
    bounds=".EmbedContainer"
    // onStart={position={ x: 0, y: 0 }}
    // onDrag={handleDrag}
    // onStop={handleStop}
    >
    <div ref={container} className=' overflow-hidden h-full w-4/5 sm:h-[34rem] resize 
    pb-10 bg-slate-600 rounded-t-lg max-w-full max-h-full md:min-w-[45rem] z-20'>
    <div  className=" handle outer p-2 pl-4 dark opacity-90 w-full rounded-[7px_7px_0px_0px];
    background: #b4b4b4">
        <div className="dot bg-red-500" onTouchStart={(e) =>  setOpen(false)}  onClick={()=> setOpen(false)}></div>
        <div className="dot bg-yellow-300"></div>
        <div className="dot bg-green-500 mr-2" onTouchStart={(e) => (onResize(container),setIsDragging(!isDragging))}  onClick={() => (onResize(container),setIsDragging(!isDragging)) }></div>
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
          <div className='hidden  sm:inline-flex absolute top-3 item'>
        <div className='flex gap-6 text-gray-400  items-center'>
        <MdArrowBackIosNew/>
        <MdArrowForwardIos/>
        <h1 className=' font-bold'>Macintosh HD</h1>
        </div>
       
        
      </div> 
      <div className=' hidden items-center sm:flex gap-4 absolute right-8 top-4 text-gray-400 '>
        <div className='flex text-xl gap-4 mr-7'><MdGridView/> <MdIosShare/> <MdFormatListBulleted/></div>
        <div className='flex text-xl gap-4 mr-7'><BsFillTagFill/> <MdApps/> <MdViewColumn/></div>
        <SlMagnifier/>
      </div>
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