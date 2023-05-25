import React from 'react'
import gsap from "gsap"
export const BotBar = ({camera}) => {
  return (
    <div className=' fixed bottom-0 w-full '>
                <div className=' w-full h-3 bg-[#2e292b] flex'> </div>

        <div className='bg-dark w-full flex justify-center bg-[#403A3C] '>
            <div className='flex justify-center  '>
            <div className=' ml-2 order-[00] relative self-center '>

            <div className="skull right-4">
			<div className="eyes">
				<div className="eye"></div>
				<div className="eye"></div>
			</div>
			<div className="teeth">
				<div className="tooth"></div>
				<div className="tooth"></div>
				<div className="tooth"></div>
			</div>
            </div>
		</div>
            <div className='h-full mr-2 w-3 bg-[#2e292b] flex'></div>
                <div className='book-bg graphic'>
                    <div className='book flex flex-col'>
                        <div id='book-shading'></div>
                        <h5 >Home</h5>
                            <div className='contents'>
                        <div id='page-shading'></div>
                        </div>
                    </div>
                </div>
                <div className='book-bg data'>
                <div className='book' onClick={() => 
                (
                    gsap.to(camera.position, {
                        x:-13.390, 
                        y:0.694,
                        z:23.097,
                        duration: 1.5,
                        onUpdate: function() {
                            camera.lookAt(5.28, 0.28, 4.42)
                        }
                    })  
                         )}>
                    <div id='book-shading'></div>
                    <h1>Works</h1>
                    <div className='contents'>
                    <div id='page-shading'></div>
                    </div>
                </div>
                </div>
                {/* <div className='book-bg photo'>
                <div className='book'>
                    <div id='book-shading'></div>
                    <h3>About</h3>
                    <div className='contents'>
                    <div id='page-shading'></div>
                    </div>
                </div>
                </div> */}
                <div className='book-bg landscape'>
                <div className='book flex-column'>
                    <div id='book-shading'></div>
                    <h5>About</h5>
                   <div className='contents'>
                    <div id='page-shading'></div>
                    </div>
                </div>
                </div>
                <div className='book-bg writing'>
                <div className='book'>
                    <div id='book-shading'></div>
                    <h5>Resume</h5>
                    <div className='contents'>
                    <div id='page-shading'></div>
                    </div>
                </div>
                </div>
                <div className='book-bg web'>
                    <div className='book'>
                        <div id='book-shading'></div>
                        <h5>Linkedin</h5>
                        <div className='contents'>
                        <div id='page-shading'></div>
                        </div>
                    </div>
                </div>
                <div className=' ml-2 order-[300] '>
                    <div className="h-full w-3 bg-[#2e292b] flex"></div>
                </div>
                <div className=' ml-2 order-[300] relative'>
                    <div className="potion z-20 absolute ml-2">
                    <div className="liquid"></div>
                    <div className="bubble"></div>
                    <div className="bubble two"></div>
                    <div className="bubble three"></div>
                </div>
                </div>
            </div>
            {/* <div className='border-b border-cyan-800 w-1/5 h-0 self-center'></div> */}

        </div>
        <div className='  w-full h-3 bg-[#363032] flex'> </div>
    </div>
  )
}
