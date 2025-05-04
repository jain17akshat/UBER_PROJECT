

import React, { useState } from 'react';
import  {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const Home = () => {
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const[panelOpen,setPanelOpen]=useState(false)

   const submitHandler=(e)=>{
 e.preventDefault()
  }


  useGSAP(function(){
    gsap.to('')
  })


  return (
    <div className='h-screen relative'>
      {/* Logo */}
      <img
        className='w-16 left-5 top-5 absolute mb-10'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        alt=""
      />

      {/* Background Image */}
      <div className='h-screen w-screen'>
        <img
          className='h-full w-full object-cover'
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className='h-screen absolute top-0 w-full flex flex-col justify-end'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-2xl py-2 font-semibold'>Find a trip</h4>

          <form onSubmit={(e)=>{
           
          }}>
            <div className='line absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full'></div>
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type='text'
              placeholder='Add a pickup point'
            />
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full'
              type='text'
              placeholder='Enter your destination'
            />
          </form>
        </div>

        <div className='h-[70%] bg-red-500 p-5 hidden'></div>
      </div>
    </div>
  );
};

export default Home;
