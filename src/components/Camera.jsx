import React , {useState, useRef} from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {onResize} from '../helpers/functions'
import Webcam from "react-webcam";

export const Camera = () => {
    const container = useRef()

  return (
    <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 30}}
    position={null} 
    scale={1}
    bounds=".EmbedContainer"
    >
    <div ref={container} className='overflow-hidden h-full sm:h-[40rem] resize pb-10  bg-slate-600 rounded-t-lg 
    max-w-full max-h-full w-3/5'>
    <div  className=" handle  outer dark opacity-90 w-full rounded-[7px_7px_0px_0px] background: #b4b4b4;">
        <div className="dot bg-red-500"  ></div>
        <div className="dot bg-yellow-300"></div>
        <div className="dot bg-green-500" onClick={() => onResize(container)}></div>
    </div>
        <div className='  h-full flex flex-col sm:flex-row'>
          <div className='right  sm:pb-10  p-4 bg-[#1B1E1F] w-full h-full overflow-auto '>
           <Webcam/>
          </div>
        </div>
    </div> 
    </Draggable>
  )
}
