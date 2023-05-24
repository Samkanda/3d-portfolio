import React from 'react'

export const BotBar = () => {
  return (
    <div className=' fixed bottom-0 w-full '>
                <div className=' w-full h-3 bg-[#2e292b] flex'> </div>

        <div className='bg-dark w-full flex justify-center bg-[#403A3C] '>
            <div className='flex justify-center  '>
            <div className=' ml-2 order-[00] relative self-center '>

            <div class="skull right-4">
			<div class="eyes">
				<div class="eye"></div>
				<div class="eye"></div>
			</div>
			<div class="teeth">
				<div class="tooth"></div>
				<div class="tooth"></div>
				<div class="tooth"></div>
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
                <div className='book'>
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
                    <div class="h-full w-3 bg-[#2e292b] flex"></div>
                </div>
                <div className=' ml-2 order-[300] relative'>
                    <div class="potion z-20 absolute ml-2">
                    <div class="liquid"></div>
                    <div class="bubble"></div>
                    <div class="bubble two"></div>
                    <div class="bubble three"></div>
                </div>
                </div>
            </div>
            {/* <div className='border-b border-cyan-800 w-1/5 h-0 self-center'></div> */}

        </div>
        <div className='  w-full h-3 bg-[#363032] flex'> </div>
    </div>
  )
}
