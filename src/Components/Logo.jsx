import React from 'react'

export default function () {
  return (
    <div className=' relative flex flex-1 justify-center items-center w-full h-full text-white' >
        {/* lines */}
      
        <div className=' flex w-screen h-[10px] bg-white absolute top-[-60px] text-black'></div>
     <div className=' flex w-screen h-[6px] bg-white absolute top-[-40px] text-black'></div>

      
     

     {/* img  */}
     <div className='absolute bg-white h-[170px] w-[170px] rounded-full top-[-140px]' > </div>
     {/* line  */}
     <div className='flex gap-[80px] w-full items-center justify-center absolute top-[10px]'>
        <p className='text-[2.2rem] font-bold'>Allisa's</p>
        <p className='text-[2.2rem] font-bold ml-7'>Kitchen</p>
     </div>
     <div className='flex gap-[100px] w-full items-center justify-center absolute top-[50px]'>
    <p className='text-[2rem] font-bold text-nowrap ' >BBQ & Grill</p>
    </div>
    <div className='flex flex-col w-full items-center justify-center absolute top-[100px]  text-nowrap'>
    <a href='https://www.google.com/maps/place/Allisa%E2%80%99+kitchen+BBQ+%26+Grill/@34.6425518,-97.1771604,17z/data=!3m1!4b1!4m6!3m5!1s0x87b2dfea8e712b47:0xedd8c845d85340a7!8m2!3d34.6425474!4d-97.1745855!16s%2Fg%2F11stzg639w?entry=ttu' target='_blank' className='font-semibold hover:text-cyan-700 '>
      <p>405 W ROBERT S KERR BLVD </p>
      <p>WYNNEWOOK OKLAHOMA</p>
    </a>

        </div>

    </div>
  )
}
