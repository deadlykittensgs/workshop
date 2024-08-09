import React from 'react'
import foodImg from '../assets/pexels-pixabay-533325.jpg';
import threeMeat from '../assets/threeMeat.jpg';


export default function Meals({mealName,price,meats,sides,select, img, description,details}) {

    function clicked() {

        console.log("clicked", mealName, "meats", meats, "sides",sides, "price", price)
    }

  return (
    <button onClick={clicked} className='flex bg-slate-300 rounded h-[300px] outline'>
       <div className=' flex flex-col justify-center items-start bg-red-600  h-[300px] w-[200px] p-2'>
        <img className=' h-[100px] w-[100%]' src={img} alt="food img" />
        <div className=' my-1 flex flex-col flex-1 w-[100%] justify-center items-center bg-black rounded overflow-auto'>
        <div className='text-white text-[1.3rem]'>{mealName}</div>
        <p className='text-white'>${price}</p>
          <p className='text-white text-[0.9rem] overflow-auto'>{description}</p>
          <p className=' text-[0.7rem] text-white' >{details}</p>
        </div>
         </div>
    </button>
  )
}
