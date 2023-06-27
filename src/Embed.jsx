import { useCallback, useState } from 'react'
import Navbar from "./components/Navbar"
import { Dock } from "./components/Dock"
import Window from "./components/Window"
import Draggable from "react-draggable";

export default function Embed() {
  const [open, setOpen] = useState(false)
console.log(open)
  return (
    <>
      <Navbar/>
      <div className="EmbedContainer  text-white h-full">
      <Draggable bounds={{left: 0, top: 30, right: 0, bottom: 0}}>
        <div className='h-full w-full'>        {open ?  <Window setOpen={setOpen}/>: ""}
</div>
      </Draggable>

      </div>
      
      <Dock setOpen={setOpen}/>
    </>
  )
}
