import React from 'react'

export const NavBar = () => {
  return (
    <div className=" w-full p-5  flex justify-center fixed">
      <div className=' w-[50rem] border-2 border-blue-400 h-20  rounded-lg flex items-center'>
        <div className=' h-full w-24 bg-white opacity-70 rounded-lg'></div>
      <div className=' absolute ml-10   bg-[#87CEEB] z-20 rounded-md h-14 w-14 '></div>
        <div className=' border-l-2 bg-white border-amber-900 h-full w-60 flex items-center '>
          <div className='flex justify-center flex-col ml-10'>
          <h3 >Navpreet </h3>
          <h3>Kanda</h3>
          </div>
        </div>
        <div className=' text flex space-x-20 justify-center w-full font-mono font-semibold'>
          <h2>Home</h2>
          <h2>Works</h2>
          <h2>About</h2>
        </div>
      </div>
    </div>
  )
}
