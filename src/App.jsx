import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Embed from './Embed'

export default function App() {
  const [laptop, setLaptop] = useState(true)

  return (
    <>
      {/* <h1 className=' absolute top 0 left-0 z-10 text-white cursor-pointer' onClick={() =>setLaptop(false)}>Expand</h1> */}

      {/* {laptop ? ( */}
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4]
          }}
        >
          {/* <Experience /> */}
        </Canvas>
      {/* ) : (
        <Embed />
      )} */}
    </>
  )
}

