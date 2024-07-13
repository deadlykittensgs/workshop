import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ribs from '../assets/BBQBackground.avif';
import storefront from '../assets/skr_2757.avif';
import food from '../assets/BBQ.avif';
import Logo from '../assets/logo.png';
import '../../src/index.css'; 
import MapComponent from '../Components/MapComponent';



export default function Home() {

const [review, setReview] = useState("Best food ever! the ribs were falling off the bone and the sides were hot and fresh")
const [number, setNumber] = useState(1)

function nextReview(direction) {
  let reviews = ["review zero", "The Green Chile burger was the best I’ve ever had by far.", "Absolutely best pulled pork anywhere!! And awesome Mac and cheese!!! We drive from okc just to eat here.", "Food is always good. Peach cobbler is outstanding. Olivia is the best waitress." ,"Thank yall for catering for us. The food was absolutely amazing and the delivery was early which worked perfect and the price was great. Thank ya’ll from the whole family.","I was glad they reopened before I left. One of the last places I ate before leaving the area and I really enjoyed the barbecue."]
if(number == 5 && direction == "up" ){
  setNumber(1)
  setReview(reviews[number])
  return
}
if(number == 1 && direction == "down" ){
  setNumber(5)
  setReview(reviews[number])
  return

} else {
  setReview(reviews[number])
  return
}
}



  return (
    <>
    <Header/>
      {/* menu */}
      <div className=' flex flex-col bg-cover bg-center h-[450px] w-screen
    items-center justify-evenly ' style={{ backgroundImage: `url(${ribs})` }}>
      <div> <img src={Logo} alt="Logo" />    </div>
      <p className='text-slate-100 text-lg'>Best BBQ in Oklahoma</p>
<button className=' text-slate-100 bg-red-700 border-2 p-1 rounded w-[30%]'>View Menu</button>
    </div>

    {/* address  */}
    <div className='bg-amber-50 flex flex-col items-center p-5'>
      <div><i className=" text-red-700 fa-solid fa-location-dot"></i></div>
      <p className='p-2'>405 E Kerr Blvd, Wynnewood</p>
    </div>
  

  {/* img  */}
    <div className='flex flex-col bg-cover bg-center h-[400px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${storefront})` }}  >
    </div>


    {/* image 2 */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
    {/* pick up  */}
    <div className='bg-amber-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]'>Order Us to Go!</h2>
      <p className=''>Enjoy the convenience of dining at home? place your order online now and savor our delicious menu from the comfort of your own space!</p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Pick UP</button></div>
    </div>
    {/* food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
{/* cater */}
    <div className='bg-amber-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]' >Catering?</h2>
      <p className=''>Have a big event or wedding coming up soon? let allisas take the stress out of feeding everyone by allowing us to cater for you!</p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Request Catering</button></div>
    </div>
     {/* inside the store */}
     <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>
{/* about us  */}
    <div className='bg-amber-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.9rem]' >About Alissa</h2>
      <h2>We know our BBQ</h2>
      <p className=''>This will be an about allisa page telling about her food and anything else you would want here </p>
      <div><button className='bg-red-700 text-slate-100 px-4 py-px rounded' >Read More</button></div>
    </div>
    {/* more food */}
    <div className='flex flex-col bg-cover bg-center h-[350px] w-screen
    items-center justify-center' style={{ backgroundImage: `url(${food})` }}  >
    </div>

    {/* reviews  */}
    <div className='bg-zinc-50 flex flex-col items-center justify-evenly w-page h-[300px] px-[30px]'>
      <h2 className='text-[1.7rem]'>People are saying</h2>
      <div className='flex justify-center items-center min-w-[100%] '>
        <button onClick={() => { setNumber(number -1), nextReview("down")}}> <i className="fa-solid fa-angle-left rounded hover:bg-slate-300"></i> </button> 
        <p className='flex flex-1 justify-center px-[30px]'>{review}</p>
        <button onClick={() => { setNumber(number +1),  nextReview("up")}}> <i className="fa-solid fa-angle-right rounded hover:bg-slate-300"></i></button> 
      </div>
 
      <div className='flex gap-5'>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-700' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>
        <div className='overflow-hidden rounded-full w-3 h-3 bg-slate-500' ></div>

      </div>
    </div>
{/* contact */}
<div className='bg-amber-50 flex flex-col items-center justify-evenly w-page h-[200px] px-[30px]'>
      <h2 className='text-[1.9rem]' >Contact us</h2>
      <h2>Email: <span className='font-bold'>ouremail@gmail.com</span></h2>
      <h2>Store Phone: <span className='font-bold'>(405) 331-8262</span></h2>

    </div>
{/* map  */}
    <div className=' flex flex-col items-center justify-evenly w-page h-[300px] px-[30px] bg-zinc-50 p-10'>
      
<MapComponent/>
    </div>

    <Footer/>

  </>
  )
}
