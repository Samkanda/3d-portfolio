import { useCallback, useState } from 'react'
import Navbar from "./components/Navbar"
import { Dock } from "./components/Dock"
import Window from "./components/Window"
import Draggable from "react-draggable";
import { Camera } from './components/Camera';
import { Modal } from './components/Modal';

export default function Embed() {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Navbar setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <div className="EmbedContainer  text-white h-full">
      <Draggable cancel={".interaction"} bounds={{left: 0, top: 30, right: 0, bottom: 0}} >
        <div className='h-full w-full flex justify-center items-center'>        {open ?  <Window setOpen={setOpen}/>: ""}</div>
      </Draggable>
      {/* <Draggable cancel={".interaction"} bounds={{left: 0, top: 30, right: 0, bottom: 0}}>
      <Camera/>
      </Draggable> */}
      {modalOpen ?  <Modal/> : ""}
    

      </div>
      
      <Dock setOpen={setOpen}/>
    </>
  )
}
