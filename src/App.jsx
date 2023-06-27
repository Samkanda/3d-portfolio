import React, { useEffect, useState , Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Embed from './Embed'
import {  Html, useProgress, Loader } from "@react-three/drei"
import { LoadingScreen } from './components/LoadingScreen.jsx'
const audio = new Audio("./audios/Song Of Unity.mp3");

export default function App() {
  const [laptop, setLaptop] = useState(true)
  const [start, setStart] = useState(false);

  // useEffect(() => {
  //   if (start) {
  //     audio.play();
  //   }
  // }, [start]);

  return (
    < >
      {laptop ? 

      <h1 className=' font-bold border-4 p-2 border-sky-100 text-3xl absolute top-3 left-3 z-10 text-white cursor-pointer' 
      onClick={() =>setLaptop(false)}>Expand</h1>
    : ""
    }
      {laptop ? (
        <>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4]
          }}
        >  
        <Suspense fallback={null}>{ <Experience />}</Suspense>
         
        {/* {start ?  <Suspense fallback={null}>{ <Experience />}</Suspense> : ""} */}
        </Canvas>
        <Loader/>
        {/* <LoadingScreen started={start} onStarted={() => setStart(true)} /> */}

        </>
        
      ) : (
        <Embed />
      )}
      
    </>
  )
}

