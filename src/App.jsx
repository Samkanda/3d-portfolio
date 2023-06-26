import React, { useCallback, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Embed from './Embed'

export default function App() {
  const [laptop, setLaptop] = useState(true)

  return (
    <>
      {laptop ? 

      <h1 className=' font-bold border-4 p-2 border-sky-100 text-3xl absolute top-3 left-3 z-10 text-white cursor-pointer' 
      onClick={() =>setLaptop(false)}>Expand</h1>
    : ""
    }
      {laptop ? (
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4]
          }}
        >
          <Experience />
        </Canvas>
      ) : (
        <Embed />
      )}
    </>
  )
}

