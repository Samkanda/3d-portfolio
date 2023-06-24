import React , {useState} from 'react'
import { Hero } from './Hero'
import { About } from './About';
import { Projects } from './Projects';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const Window = ({}) => {
  const [tab, setTab] = useState("Intro");
  const [height, setHeight] = useState(500)
  const [width, setWidth] = useState(500)

  const onResize = (event, {node, size, handle}) => {
    setWidth(size.width);
    setHeight(size.height);
  }

  return (
    
    <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 100, y: 100}}
    position={null} 
    scale={1}
    // onStart={handleStart}
    // onDrag={handleDrag}
    // onStop={handleStop}
    >
    <div className='overflow-hidden resize w-[960px] bg-slate-600 rounded-t-lg '>
    <div className=" handle  outer dark opacity-90 w-full rounded-[7px_7px_0px_0px];
    background: #b4b4b4;">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
        <div className='  h-full flex'>
          <div className='left text-gray-100  w-[10rem] h-full  '>
            <h1 className='mx-4 py-4 hover:font-bold' onClick={() => setTab("Intro")}> Introduction</h1>
            <h1 className='mx-4 py-4 hover:font-bold' onClick={() => setTab("About")}> About</h1>
            <h1 className='mx-4 my-4 hover:font-bold'onClick={() => setTab("Projects")}> Projects</h1>
          </div>
          <div className='right bg-[#273138] w-full h-full overflow-auto '>
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