import './style.scss'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {About} from './components/About'
import { Projects } from './components/Projects'
import Embed from './Embed'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <h1 className=' absolute top 0 left-0 z-10 text-white cursor-pointer'>Expand</h1>
    {/* <Embed/> */}
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
    </>
)