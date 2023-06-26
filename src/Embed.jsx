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
      <Draggable bounds=".EmbedContainer ">
      <div className="EmbedContainer mt-10  text-white h-full">
       
        {open ?  <Window setOpen={setOpen}/>: ""}

      </div>
      </Draggable>
      
      <Dock setOpen={setOpen}/>
    </>
  )
}
