import React , {useState, useRef} from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {onResize} from '../helpers/functions'
import Page1 from '../images/Navpreet_Resume_1.jpg'
import Page2 from '../images/Navpreet_Resume_2.jpg'
import {MdViewColumn, MdArrowBackIosNew, MdArrowForwardIos, MdGridView, MdIosShare, MdFormatListBulleted, MdApps} from "react-icons/md";
import {BsFillTagFill, BsCodeSlash, BsListTask, BsBriefcase} from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl"; 

export const Resume = ({setOpen}) => {
    const container = useRef()
    const [isDragging, setIsDragging] = useState(true)
  return (
    <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 30, y: 30}} 
    cancel={".interaction"}
    position={!isDragging? { x: 0, y: -15 } : undefined}
    scale={1}
    bounds=".EmbedContainer"
    // onStart={position={ x: 0, y: 0 }}
    // onDrag={handleDrag}
    // onStop={handleStop}
    >
    <div ref={container} className=' overflow-hidden h-full w-4/5 sm:h-[34rem] resize 
    pb-10  rounded-t-lg max-w-full max-h-full z-20'>
    <div  className=" handle outer bg-green-50 p-2 pl-4 dark opacity-90 w-full rounded-[7px_7px_0px_0px];
    background: #b4b4b4">
        <div className="dot bg-red-500" onTouchStart={(e) =>  setOpen(false)}  onClick={()=> setOpen(false)}></div>
        <div className="dot bg-yellow-300"></div>
        <div className="dot bg-green-500 mr-2" onTouchStart={(e) => (onResize(container),setIsDragging(!isDragging))}  onClick={() => (onResize(container),setIsDragging(!isDragging)) }></div>
    </div>
        <div className='h-full flex flex-col sm:flex-row'>
        <div className='left hidden sm:flex bg-[#262626] text-sm text-gray-400 min-w-[10rem] h-48 sm:h-full'>
          <div className='ml-5 '>
            <h1 className='my-5'>Pages</h1>
            <img className = 'w-24 my-5' src={Page1}/>
            <img className = 'w-24' src={Page2}/>
          </div>
          </div>
          <div className='right  sm:pb-10  p-4 bg-[#1B1E1F] w-full h-full overflow-auto '>
          <div className='hidden  sm:inline-flex absolute top-3 item'>
        <div className='flex gap-6 text-gray-400  items-center'>
            <h1 className=' font-bold'>PDF Viewer</h1>
        </div>
      </div> 
      <div className=' hidden items-center sm:flex gap-4 absolute right-8 top-4 text-gray-400 '>
        <div className='flex text-xl gap-4 mr-7'><MdGridView/> <MdIosShare/> <MdFormatListBulleted/></div>
        <div className='flex text-xl gap-4 mr-7'><BsFillTagFill/> <MdApps/> <MdViewColumn/></div>
        <SlMagnifier/>
      </div>
          <img className = ' my-5' src={Page1}/>
            <img className = '' src={Page2}/>
          </div>
        </div>
    </div> 
    </Draggable>
  )
}
