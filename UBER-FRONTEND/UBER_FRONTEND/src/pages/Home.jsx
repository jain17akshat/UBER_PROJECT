
// import React, { useState, useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import 'remixicon/fonts/remixicon.css';
// import LocationSearchPanel from '../components/LocationSearchPanel';
// const Home = () => {
//   const [pickup, setPickup] = useState('');
//   const [destination, setDestination] = useState('');
//   const [panelOpen, setPanelOpen] = useState(false);
//   const panelRef = useRef(null);
//   const panelCloseRef=useRef(null);

//   const submitHandler = (e) => {
//     e.preventDefault();
//   }; 

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, {
//         height: '70%',
//         opacity:1,
//         duration: 0.5,
//         ease: 'power2.out',
//         display: 'block',
//       });
//       gsap.to(panelCloseRef.current,{
//         opacity:1
//       })
//     } else {
//       gsap.to(panelRef.current, {
//         height: '0%',
//         duration: 0.5,
//         ease: 'power2.in',
//         onComplete: () => {
//           panelRef.current.style.display = 'none';
//         },
//       });
//       gsap.to(panelCloseRef.current,{
//         opacity:0
//       })

//     }
//   }, [panelOpen]);

//   return (
//     <div className="h-screen relative">
//       {/* Logo */}
//       <img
//         className="w-16 left-5 top-5 absolute mb-10"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
//         alt=""
//       />

//       {/* Background Image */}
//       <div className="h-screen w-screen">
//         <img
//           className="h-full w-full object-cover"
//           src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
//           alt=""
//         />
//       </div>

//       <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
//         <div className="h-[30%] p-5 bg-white relative">
//           <h5 ref={panelCloseRef} onClick={()=>{
//             setPanelOpen(false)

//           }} className='absolute text-xl opacity-0 right-6 top-6'>
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>
//           <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

//           <form onSubmit={submitHandler}>
//             <div className="line absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
//             <input
//               onClick={() => {
//                 setPanelOpen(true);
//               }}
//               value={pickup}
//               onChange={(e) => {
//                 setPickup(e.target.value);
//               }}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
//               type="text"
//               placeholder="Add a pickup point"
//             />
//             <input
//               onClick={() => {
//                 setPanelOpen(true);
//               }}
//               value={destination}
//               onChange={(e) => {
//                 setDestination(e.target.value);
//               }}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
//               type="text"
//               placeholder="Enter your destination"
//             />
//           </form>
//         </div>

//         <div
//           ref={panelRef}
//           className=" opacity-0 bg-white p-5 overflow-hidden"
//           style={{ height: '0%', display: 'none' }}
//         >
//           <LocationSearchPanel/>
//           {/* Your animated panel content goes here */}
//         </div>
//       </div>
//       <div className='fixed z-10 bottom-0 bg-whiter p-3'>
//         <div className='flex border-2 border-black rounded-xl w-full p-3 items-center'>
//           <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"  alt=""/>
//       <div className='w-1/2'>
//       <h4 className='fot-medium text-sm'>UberGo<span><i className='ri-user-3-fill'/></span></h4>
//       <h5 className='font-medium text-sm'> 2mins away</h5>
//       <p className='font-normal text-xs text-gray-600'>Affordable ,comapact rides</p>

//       </div>
//       <h2 className='text-xl font-semibolde'>Rs.190.2</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        display: 'block',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          panelRef.current.style.display = 'none';
        },
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 left-5 top-5 absolute mb-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        alt="Logo"
      />

      {/* Background Image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Background"
        />
      </div>

      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute text-xl opacity-0 right-6 top-6 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pickup point"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Animated Panel */}
        <div
          ref={panelRef}
          className="opacity-0 bg-white p-5 overflow-hidden"
          style={{ height: '0%', display: 'none' }}
        >
          <LocationSearchPanel />
        </div>
      </div>

      {/* Bottom Card */}
      <div className="fixed z-10 bottom-0 w-full p-3">
     {/* <h3 className='text-2xl font-semibold mt-3 mb-3'>Choose a Vehicle</h3> */}
        <div className="flex border-2 border-black rounded-xl w-full p-3 items-center bg-white px-3 py-6">
          <img
            className="w-24 h-16 object-cover"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
            alt="Uber car"
          />
          <div className="ml-4 w-1/2">
            <h4 className="font-semibold text-sm">
              UberGo <i className="ri-user-3-fill ml-1" />
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text font-semibold ml-auto">Rs.190.2</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
