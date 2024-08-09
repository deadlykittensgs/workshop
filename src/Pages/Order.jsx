import React, { useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Meals from '../Components/Meals'
import threeMeat from '../assets/threeMeat.jpg';
import burger from '../assets/burger.jpg';
import comingSoon from '../assets/comingsoon.png'





export default function Order() {

    function clicked() {
        console.log("clicked")
    }

    const diners = useRef(null);
    const specialtyDinners = useRef(null);
    const bBQBaskets = useRef(null);
    const burgerBaskets = useRef(null);
    const specialtyBaskets = useRef(null);
    const kidsMeals = useRef(null);
    const saladsPotato = useRef(null);
    const appetizers = useRef(null);
    const sides = useRef(null);
    const drinks = useRef(null)
    const desserts = useRef(null)
    const details = useRef(null)


   function handleScroll(location) {
    console.log("clicked")
    location.current.scrollIntoView({ behavior: 'smooth' });
      };



  return (  
    


    <div className='flex flex-col bg-custom-image'>
    <Header/>
    <div className='flex flex-col'>
        <div className='flex justify-evenly h-fit w-[100%] bg-black/50 text-white overflow-auto sticky top-[110px]'>
            <button  onClick={ () => handleScroll(diners)} className=' hover:text-black hover:bg-slate-100 p-3' >Diners</button>
            <button  onClick={ () => handleScroll(specialtyDinners)} className='hover:text-black hover:bg-slate-100 p-3' >Specialty Diners</button>
            <button  onClick={ () => handleScroll(bBQBaskets)} className='hover:text-black hover:bg-slate-100 p-3' >BBQ Baskets</button>
            <button  onClick={ () => handleScroll(burgerBaskets)} className='hover:text-black hover:bg-slate-100 p-3' >Burger Baskets</button>
            <button  onClick={ () => handleScroll(specialtyBaskets)} className='hover:text-black hover:bg-slate-100 p-3' >Specialty Baskets</button>
            <button  onClick={ () => handleScroll(kidsMeals)} className=' hover:text-black hover:bg-slate-100 p-3' >Kids Meals</button>
            <button  onClick={ () => handleScroll(saladsPotato)} className='hover:text-black hover:bg-slate-100 p-3' >Salads/ Potatoes</button>
            <button  onClick={ () => handleScroll(appetizers)} className='hover:text-black hover:bg-slate-100 p-3' >Appetizers</button>
            <button onClick={ () => handleScroll(sides)} className='hover:text-black hover:bg-slate-100 p-3' >Sides</button>
            <button onClick={ () => handleScroll(drinks)} className='hover:text-black hover:bg-slate-100 p-3' >Drinks</button>
            <button onClick={ () => handleScroll(desserts)} className='hover:text-black hover:bg-slate-100 p-3' >Deserts</button>
        </div>

      {/* meals start */}

        <div ref={diners}  className='flex flex-col items-center align-center' > 
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Dinners</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Diner"} price={16.00} description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"Chopped Beef Diner"} price={16.00}  description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"Rib Dinner"} price={16.00}  description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"Sausage Diner"} price={15.00}   description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"Hot Link Diner"} price={15.00}  description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"Pulled Pork Diner"} price={15.00}  description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"2 Meat Diner"} details={"No Double meat"} price={18.00} description={"Served With 2 Sides & Sourdough Toast"} img={threeMeat}/>
        <Meals mealName={"3 Meat Diner"} details={"No Double meat"} price={20.00} description={"sliced beef on a bun with a roll and hushpuppy"} img={threeMeat}/>
        </div>
        </div>


        <div ref={specialtyDinners}  className='flex flex-col items-center align-center'  >
            <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Specialty Dinners</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Hamburger Steak Dinner"} price={14.00}   img={burger}  description={"Served With Grilled Onions, Sauteed Mushrooms & Brown Gravy. Comes with Mashed Potaots, Sourdough Toast & Choice Of 1 Side "}/>
        <Meals mealName={"Chicken Fried Steak Dinner"} price={15.00} img={burger} description={"Served With White Gravy, Sourdough Toast. Comes with Mashed Potato & Choice Of 1 Side"} />
        <Meals mealName={"Fried Catfish Dinner"} price={13.00} img={burger} description={"Served With 10 oz. Of Catfish, Choice Of 2 Sides & Hushpuppies"}/>
        <Meals mealName={"Chicken Strip Dinner"} price={13.00} img={burger} description={"Served With 5 Strips, Gravy & Your Choice Of 2 Sides & Sourdough Toast"}/>
        <Meals mealName={"Grilled Chicken Dinner"} price={13.00} img={burger} description={"Served With 8 oz. Grilled Chicken Breast, Your Choice Of 2 Sides & Sourdough Toast"}/>
        <Meals mealName={"Smothered Chicken Dinner"} price={14.00} img={burger} description={"Served With 8 oz. Grilled Chicken Breast, Covered In Provolone Cheese, Grilled Onions & Mushrooms, Your Choice of 2 Sides And Sourdough Toast"}/>
            </div>
            </div>


        <div  ref={bBQBaskets}  className='flex flex-col items-center align-center'   >
            <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >BBQ Baskets</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Sliced Beef Sandwich"} details={"Sandwich Only $9"} price={12.00}  img={threeMeat} description={"Comes With 1 Side & a Drink"} />
        <Meals mealName={"Chopped Beef Sandwich"} details={"Sandwich Only $9"} price={12.00} img={threeMeat} description={"Comes With 1 Side & a Drink"} />
        <Meals mealName={"Pulled Pork Sandwich"} details={"Sandwich Only $9"} price={12.00} img={threeMeat} description={"Comes With 1 Side & a Drink"}/>
        <Meals mealName={"Hot-Link Sandwich"} details={"Sandwich Only $9"} price={12.00}  img={threeMeat} description={"Comes With 1 Side & a Drink"} />
        <Meals mealName={"Sausage Sandwich"} details={"Sandwich Only $9"}  price={12.00} img={threeMeat} description={"Comes With 1 Side & a Drink"} />
        <Meals mealName={"BBQ Club Sandwich"} details={"Sandwich Only $9"} price={14.00} img={threeMeat} description={"Comes With 1 Side & a Drink"}/>
        <Meals mealName={"Rib Basket"}  price={12.00} img={threeMeat} description={"Served With 3 Ribs, Choice of 1 Side & Sourdough Toast"}/>
            </div>
            </div>

        <div ref={burgerBaskets}  className='flex flex-col items-center align-center' >
            <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Burger Baskets</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Hamburger Basket"} details={"Burger Only $8"} price={10.00}  sides={"Sides:1"}  img={threeMeat} description={"Served With All Burger Toppings With Choice Of 1 Side & Drink"}/>
        <Meals mealName={"CheeseBurger Basket"} details={"cheeseburger Only $8"} price={11.00}  sides={"Sides:1"} img={threeMeat} description={"Served With All Burger Toppings With Choice Of 1 Side & Drink"}/>
        <Meals mealName={"Mushroom Burger Basket"} details={"Burger Only $9"} price={12.00}  img={threeMeat} description={"Served With All Burger Toppings + Sauteed Mushrooms With Choice Of 1 Side & Drink"}/>
        <Meals mealName={"Green Chili Burger Basket"} details={"Burger Only $8"} price={12.00}   sides={"Sides:1"} img={threeMeat} description={"Served With All Burger Toppings + Green Chili's With Choice Of 1 Side & Drink"} />
        <Meals mealName={"Bacon Burger Basket"} details={"Burger Only $9"} price={12.00} img={threeMeat} description={"Served With All Burger Toppings + Applewood Bacon With Choice Of 1 Side & Drink"}/>
        <Meals mealName={"Grilled Onion Burger Basket"} details={"Burger Only $8"} price={12.00} img={threeMeat} description={"Served With All Burger Toppings + Grilled Onions With Choice Of 1 Side & Drink"}/>
        <Meals mealName={"Avocado Burger Basket"} details={"Burger Only $9"} price={12.00} img={threeMeat} description={"Served With All Burger Toppings + Sliced Avocado With Choice Of 1 Side & Drink"}/>
            </div>
            </div>






 
        <div ref={specialtyBaskets}  className='flex flex-col items-center align-center'  >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Specialty Baskets</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Catfish Basket"} price={10.00} img={threeMeat} description={"Served With 3 Pieces Of Catfish, Choice Of 1 Side And Hushpuppies"}/>
        <Meals mealName={"French Dip Basket"} price={13.00}  img={threeMeat} description={"Sliced Beef On A French Roll Toasted With Provolone Cheese, Served With Au Jus' & Choice Of 1 Side"} />
        <Meals mealName={"Grilled Chicken Basket"} price={12.00} img={threeMeat} description={"Grilled Chicken Sandwich Served With Lettuce, Tomato, & Pickles And Your Choice of 1 Side"} />
     
            </div>
            </div>



            <div ref={kidsMeals}  className='flex flex-col items-center align-center' >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8'>Kids Meals</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Chicken Strip Basket"} price={8.00} img={threeMeat} description={"Served With 3 Chicken Strips, Gravy & Sourdough Toast and your choice of 1 Kids side and drink"}/>
        <Meals mealName={"Kids Chopped Beef Dinner"} price={8.00} img={threeMeat} description={"Served with 1/3 lb. Of Chopped Beef and a slice of Sourdough Toast and your choice of 1 Kids side and drink "} />
        <Meals mealName={"Grilled Cheeses Basket"} price={6.00} img={threeMeat} description={"Hearty Grilled Cheese Served with Pickles On The Side and your choice of 1 Kids side and drink"} />
        <Meals mealName={"Kids Rib Basket"} price={9.00} img={threeMeat} description={"Comes With 1 Rib & Sourdough Toast and your choice of 1 Kids side and drink"} />
        <div>
        <button className='flex bg-slate-300 rounded h-[300px] outline'>
       <div className=' flex flex-col justify-center items-start bg-red-600  h-[300px] w-[200px] p-2'>

        <div className=' my-1 flex flex-col flex-1 w-[100%] justify-center items-center bg-black rounded'>
            <h2 className='font-bold text-[1.4rem] text-white'>Kids Sides</h2>
<div className='text-white border border-red-600 p-4 mt-5'>
      <p>Mac & Cheese</p>
      <p>French Fries</p>
      <p>Tater Tots</p>
      <p>Green Beans</p>

</div>
 
        </div>
         </div>
    </button>


        </div>
            </div>
            </div>

            <div ref={saladsPotato}   className='flex flex-col items-center align-center'  >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Salads/Potato</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"BBQ Salad"} price={8.00} img={threeMeat} description={"Lettuce, Tomato, Onion, Cheese And A Boiled Egg With Your Choice Of BBQ Meat"}  />
        <Meals mealName={"Cobb Salad"} price={9.00} img={threeMeat} description={"Lettuce, Tomato, Onion, Cheese, And Boiled Egg With Chopped Ham And Turkey"}   />
        <Meals mealName={"Grilled Chicken Salad"} price={8.00}  img={threeMeat} description={"Lettuce, Tomato, Onion, Cheese, Sliced Avocado, Tortilla Strips And Grilled Chicken"}  />
        <Meals mealName={"BBQ Loaded Baked Potato"} price={10.00}  img={threeMeat} description={"Served With Your Choice Of Sliced Beef, Pulled Pork, Sausage, Hotlinks or Grilled Chicken, Butter, Sour Cream, Cheese & Bacon Crumbles"}  />
     
            </div>
            </div>




        <div ref={appetizers}  className='flex flex-col items-center align-center' >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8'>Appetizers</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Onion Rings With Cajun Ranch"} price={8.00} img={threeMeat} description={""}/>
        <Meals mealName={"Queso, Salsa & Chips"} price={9.00} img={threeMeat} description={""} />
        <Meals mealName={"Loaded Fries"} price={8.00} img={threeMeat} description={""} />
            </div>
            </div>


            <div ref={sides}  className='flex flex-col items-center align-center' >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8'>Sides</p>
        <div className='flex items-evenly justify-evenly gap-10 flex-1 flex-wrap '>
      
      <div className='w-fit h-fit bg-black text-white border border-red-500 border-[10px]'>
        
        

               <div className=' flex flex-col justify-evenly gap-[10px] p-[20px] w-[250px]' >
                <div className='justify-center flex font-semibold text-[1.5rem]'>Sides Alacarte $3</div>
               <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Mac & Cheese</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Baked Beans</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Pinto Beans</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Green Beans</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Potato Salad</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Coleslaw</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Mashed Potatoes</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Fried Okra</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>French Fries</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Tater Tots</p></div>
                <div className='flex gap-1' ><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p className='text-nowrap' >Diner Salad</p> <p className='text-[0.8rem] text-nowrap'>(2$ Alacatrte)</p></div>
                <div className='flex gap-1' > <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p className='text-nowrap' >Baked Potato</p><p className='text-[0.8rem] text-nowrap '>(3$ Alacatrte)</p></div>
               </div>
      </div>
            </div>
            </div>

   

        <div ref={drinks}  className='flex flex-col items-center align-center pb-10' >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Drinks $2.50</p>
        <div className='flex justify-center items-center w-fit h-fit p-[30px] bg-black text-white gap-10 border border-red-500 border-[10px] '>
        
        
        <div className='flex'>
            {/* row 1  */}
        <div className=' flex flex-col justify-evenly p-[20px]'>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>Tea</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>Dr. Pepper</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p> Diet Dr. Pepper</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>Pepsi</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>Pepsi Zero</p> </div>
        </div>
           {/* row 2   */}
         <div className=' flex flex-col justify-evenly p-[20px]' >
            <div className='flex gap-2'><span><i className="fa-solid fa-circle text-[0.5rem]"></i></span><p>Mountain Dew</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>RootBeer</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p> Starry</p> </div>
            <div className='flex gap-1'> <span><i className="fa-solid fa-circle text-[0.5rem]"></i></span> <p>Lemonade</p> </div>
            </div>
        </div>
      
            </div>
            </div>

            <div ref={desserts}  className='flex flex-col items-center align-center pb-10' >
        <p className=' p-4 font-bold bg-slate-200/80 items-center text-center text-[1.8rem] w-screen m-8' >Desserts</p>
        <div className='flex items evenly justify-evenly gap-10 flex-1 flex-wrap '>
        <Meals mealName={"Cheese Cake"} price={4.50} description={"Sweet Or Unsweet"} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/160px-Iced_Tea_from_flickr.jpg"}/>
        <Meals mealName={"Cobbler Of The Day"} price={6.00}  img={"https://logos-world.net/wp-content/uploads/2021/08/Dr-Pepper-Logo.png"} />
            </div>
            </div>
    
     </div>
    <Footer/>
    
    </div>
  )
}
