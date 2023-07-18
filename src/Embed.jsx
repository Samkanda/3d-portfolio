import { useCallback, useState } from 'react'
import Navbar from "./components/Navbar"
import { Dock } from "./components/Dock"
import Window from "./components/Window"
import Draggable from "react-draggable";
import { Resume } from './components/Resume';
import { Modal } from './components/Modal';
import folder from './icons/folder.svg'

export default function Embed() {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <>
      <Navbar setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <div className="EmbedContainer text-white h-full">
        <div className='h-full w-full flex justify-center items-center absolute top-10'>        
        <div  onClick={() => setPdfOpen(!pdfOpen)} className='folder absoulte top-4 right-10 flex flex-col  items-center justify-center text-white interaction z-0'>
        <img  className='' src={folder}/>
        <p>Resume</p>
      </div>
          {open ?  <Window setOpen={setOpen} />: ""}
          {pdfOpen ? <Resume setOpen={setPdfOpen}/>: ""}
          

        </div>
   
      {modalOpen ?  <Modal/> : ""}
    

      </div>

      <Dock setOpen={setOpen} open={open}/>
    </>
  )
}
