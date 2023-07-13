import React, { useEffect, useRef } from 'react';
import github from '../icons/github.png'
import mail from '../icons/mail.png'
import safari from '../icons/safari.png'
import folder from '../icons/folder2.png'
import vscode from '../icons/vscode.png'
import camera from '../icons/camera.png'

import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "framer-motion";

export function Dock({setOpen, open}) {
    let mouseX = useMotionValue(Infinity);

  
    return (
      <div className='flex  w-full sm:w-max fixed left-0 right-0 mx-auto bottom-1 z-50 overflow-x-scroll sm:overflow-x-visible'>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-[#374151] px-4 pb-3"
      >
        {[...Array(6).keys()].map((i) => (
          <AppIcon mouseX={mouseX} count={i} key={i} setOpen={setOpen} open={open}/>
        ))}
      </motion.div>
      </div>
    );
  }


  
function AppIcon({ mouseX, count, setOpen, open }) {
  const openWindow = (i)=> {
   if(i == 0) {
    setOpen(!open)
   }
   if(i == 1) {
    window.open('https://github.com/Samkanda', '_blank', 'noreferrer');
   }
   if(i ==2){
    window.location = 'mailto:navpreetkanda1@hotmail.ca'
   }
  }
  const icons =[folder, github, mail, safari, camera, vscode ]
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 ">
        <img onClick={() => { openWindow(count) }} src={icons[count]}/>
      </motion.div>
  );
}