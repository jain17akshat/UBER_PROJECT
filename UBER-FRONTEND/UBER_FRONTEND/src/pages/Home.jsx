


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
//   const panelCloseRef = useRef(null);

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, {
//         height: '70%',
//         opacity: 1,
//         duration: 0.5,
//         ease: 'power2.out',
//         display: 'block',
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 1,
//       });
//     } else {
//       gsap.to(panelRef.current, {
//         height: '0%',
//         duration: 0.5,
//         ease: 'power2.in',
//         onComplete: () => {
//           panelRef.current.style.display = 'none';
//         },
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 0,
//       });
//     }
//   }, [panelOpen]);

//   return (
//     <div className="h-screen relative">
//       {/* Logo */}
//       <img
//         className="w-16 left-5 top-5 absolute mb-10"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
//         alt="Logo"
//       />

//       {/* Background Image */}
//       <div className="h-screen w-screen">
//         <img
//           className="h-full w-full object-cover"
//           src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
//           alt="Background"
//         />
//       </div>

//       <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
//         <div className="h-[30%] p-5 bg-white relative">
//           <h5
//             ref={panelCloseRef}
//             onClick={() => setPanelOpen(false)}
//             className="absolute text-xl opacity-0 right-6 top-6 cursor-pointer"
//           >
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>
//           <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

//           <form onSubmit={submitHandler}>
//             <div className="line absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
//               type="text"
//               placeholder="Add a pickup point"
//             />
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
//               type="text"
//               placeholder="Enter your destination"
//             />
//           </form>
//         </div>

//         {/* Animated Panel */}
//         <div
//           ref={panelRef}
//           className="opacity-0 bg-white p-5 overflow-hidden"
//           style={{ height: '0%', display: 'none' }}
//         >
//           <LocationSearchPanel />
//         </div>
//       </div>

//       {/* Bottom Card */}
//       <div className="fixed z-10 bottom-0 w-full p-3">
//      {/* <h3 className='text-2xl font-semibold mt-3 mb-3'>Choose a Vehicle</h3> */}
//         <div className="flex border-2 border-black rounded-xl w-full p-3 items-center bg-white px-3 py-6">
//           <img
//             className="w-24 h-16 object-cover"
//             src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
//             alt="Uber car"
//           />
//           <div className="ml-4 w-1/2">
//             <h4 className="font-semibold text-sm">
//               UberGo <i className="ri-user-3-fill ml-1" />
//             </h4>
//             <h5 className="font-medium text-sm">2 mins away</h5>
//             <p className="font-normal text-xs text-gray-600">
//               Affordable, compact rides
//             </p>
//           </div>
//           <h2 className="text font-semibold ml-auto">Rs.190.2</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

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
//   const panelCloseRef = useRef(null);
// const [vehichlePanel, setVehichlePanel] = useState(false)
//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, {
//         height: '70%',
//         opacity: 1,
//         duration: 0.5,
//         ease: 'power2.out',
//         display: 'block',
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 1,
//       });
//     } else {
//       gsap.to(panelRef.current, {
//         height: '0%',
//         duration: 0.5,
//         ease: 'power2.in',
//         onComplete: () => {
//           panelRef.current.style.display = 'none';
//         },
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 0,
//       });
//     }
//   }, [panelOpen]);

//   return (
//     <div className="h-screen relative">
//       {/* Logo */}
//       <img
//         className="w-16 left-5 top-5 absolute mb-10"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
//         alt="Logo"
//       />

//       {/* Background Image */}
//       <div className="h-screen w-screen">
//         <img
//           className="h-full w-full object-cover"
//           src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
//           alt="Background"
//         />
//       </div>

//       <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
//         <div className="h-[30%] p-5 bg-white relative">
//           <h5
//             ref={panelCloseRef}
//             onClick={() => setPanelOpen(false)}
//             className="absolute text-xl opacity-0 right-6 top-6 cursor-pointer"
//           >
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>
//           <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

//           <form onSubmit={submitHandler}>
//             <div className="line absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
//               type="text"
//               placeholder="Add a pickup point"
//             />
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
//               type="text"
//               placeholder="Enter your destination"
//             />
//           </form>
//         </div>

//         {/* Animated Panel */}
//         <div
//           ref={panelRef}
//           className="opacity-0 bg-white p-5 overflow-hidden"
//           style={{ height: '0%', display: 'none' }}
//         >
//           <LocationSearchPanel 
//           vehichlePanel={vehichlePanel} setVehichlePanel={setVehichlePanel}
//           />
//         </div>
//       </div>

//       Bottom Cards
//       <div className="fixed z-10 bottom-0 w-full p-3 space-y-3">
//         {/* Card 1 */}
//         <div className="flex border-2 translate-y-full border-black rounded-xl w-full p-3 items-center bg-white">
//           <img
//             className="w-24 h-16 object-cover"
//             src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
//             alt="UberGo"
//           />
//           <div className="ml-4 w-1/2">
//             <h4 className="font-semibold text-sm">UberGo <i className="ri-user-3-fill ml-1" /></h4>
//             <h5 className="font-medium text-sm">2 mins away</h5>
//             <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
//           </div>
//           <h2 className="text font-semibold ml-auto">Rs.190.2</h2> */}
//          </div>

//         {/* Card 2 */}
//         <div className="flex border-2 translate-y-full border-black rounded-xl transw-full p-3 items-center bg-white">
//           <img
//             className="w-24 h-16 object-cover"
//             src="data:image/jpeg;base64,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"
//             alt="UberX"
//           />
//           <div className="ml-4 w-1/2">
//             <h4 className="font-semibold text-sm">UberX <i className="ri-user-3-fill ml-1" /></h4>
//             <h5 className="font-medium text-sm">5 mins away</h5>
//             <p className="font-normal text-xs text-gray-600">Spacious and comfortable</p>
//           </div>
//           <h2 className="text font-semibold ml-auto">Rs.250.0</h2>
//         </div>

//            <div className="ml-4 w-1/2">
//             <h4 className="font-semibold text-sm">UberXL <i className="ri-user-3-fill ml-1" /></h4>
//             <h5 className="font-medium text-sm">8 mins away</h5>
//             <p className="font-normal text-xs text-gray-600">Extra seats for groups</p>
//           </div>
//           <h2 className="text font-semibold ml-auto">Rs.310.5</h2>
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useRef, useEffect } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import 'remixicon/fonts/remixicon.css';
// import LocationSearchPanel from '../components/LocationSearchPanel'; // Update this path as needed

// const Home = () => {
//   const [pickup, setPickup] = useState('');
//   const [destination, setDestination] = useState('');
//   const [panelOpen, setPanelOpen] = useState(false);
//   const [vehichlePanel, setVehichlePanel] = useState(false);
//   const [showRides, setShowRides] = useState(false); // Controls visibility

//   const panelRef = useRef(null);
//   const panelCloseRef = useRef(null);
//   const rideCardRef = useRef(null);

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, {
//         height: '70%',
//         opacity: 1,
//         duration: 0.5,
//         ease: 'power2.out',
//         display: 'block',
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 1,
//       });
//     } else {
//       gsap.to(panelRef.current, {
//         height: '0%',
//         duration: 0.5,
//         ease: 'power2.in',
//         onComplete: () => {
//           panelRef.current.style.display = 'none';
//         },
//       });
//       gsap.to(panelCloseRef.current, {
//         opacity: 0,
//       });
//     }
//   }, [panelOpen]);

//   // Animate the ride options card when both inputs are filled
//   useEffect(() => {
//     if (pickup && destination) {
//       gsap.fromTo(
//         rideCardRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
//       );
//     }
//   }, [pickup, destination]);

//   return (
//     <div className="h-screen relative">
//       {/* Logo */}
//       <img
//         className="w-16 left-5 top-5 absolute"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
//         alt="Logo"
//       />

//       {/* Background Image */}
//       <div className="h-screen w-screen">
//         <img
//           className="h-full w-full object-cover"
//           src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
//           alt="Background"
//         />
//       </div>

//       {/* Overlay Content */}
//       <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
//         <div className="h-[30%] p-5 bg-white relative">
//           {/* Close Panel Button */}
//           <h5
//             ref={panelCloseRef}
//             onClick={() => setPanelOpen(false)}
//             className="absolute text-xl opacity-0 right-6 top-6 cursor-pointer transition-opacity duration-300"
//           >
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>

//           <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

//           {/* Form */}
//           <form onSubmit={submitHandler}>
//             <div className="absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
//               type="text"
//               placeholder="Add a pickup point"
//             />
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full"
//               type="text"
//               placeholder="Enter your destination"
//             />
//           </form>
//         </div>

//         {/* Animated Location Search Panel */}
//         <div
//           ref={panelRef}
//           className="opacity-0 bg-white p-5 overflow-hidden"
//           style={{ height: '0%', display: 'none' }}
//         >
//           <LocationSearchPanel
//             vehichlePanel={vehichlePanel}
//             setVehichlePanel={setVehichlePanel}
//           />
//         </div>
//       </div>

//       {/* Combined Ride Options Card */}
//       {pickup && destination && (
//   <div
//     ref={rideCardRef}
//     className="fixed z-10 bottom-0 w-full px-4 pb-4"
//   >
//     <div className="border-2 border-black rounded-t-2xl bg-white shadow-xl max-h-[60vh] overflow-y-auto p-4 space-y-4">
//       <h3 className="text-lg font-semibold mb-2">Choose a Vehicle</h3>

//       {/* UberGo Option */}
//       <div className="flex items-center border rounded-lg p-3">
//         <img
//           className="w-16 h-12 object-cover"
//         src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
// alt="UberGo"
//         />
//         <div className="ml-4 flex-1">
//           <h4 className="font-semibold text-sm">
//             UberGo <i className="ri-user-3-fill ml-1" /> 4
//           </h4>
//           <p className="text-xs text-gray-600">2 mins away</p>
//           <p className="text-xs text-gray-500">Affordable, compact rides</p>
//         </div>
//         <h2 className="text font-semibold">₹193.20</h2>
//       </div>

//       {/* Moto Option */}
//       <div className="flex items-center border rounded-lg p-3">
//         <img
//           className="w-16 h-12 object-cover"
//           src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
//           alt="Moto"
//         />
//         <div className="ml-4 flex-1">
//           <h4 className="font-semibold text-sm">
//             Moto <i className="ri-user-3-fill ml-1" /> 1
//           </h4>
//           <p className="text-xs text-gray-600">3 mins away</p>
//           <p className="text-xs text-gray-500">Affordable motorcycle rides</p>
//         </div>
//         <h2 className="text font-semibold">₹65</h2>
//       </div>

//       {/* Auto Option */}
//       <div className="flex items-center border rounded-lg p-3">
//         <img
//           className="w-16 h-12 object-cover"
//           src="data:image/jpeg;base64,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"
//           alt="Auto"
//         />
//         <div className="ml-4 flex-1">
//           <h4 className="font-semibold text-sm">
//             UberAuto <i className="ri-user-3-fill ml-1" /> 3
//           </h4>
//           <p className="text-xs text-gray-600">3 mins away</p>
//           <p className="text-xs text-gray-500">Affordable Auto rides</p>
//         </div>
//         <h2 className="text font-semibold">₹118.86</h2>
//       </div>
//     </div>
//   </div>
// )}

    
//     </div>
//   );
// };

// export default Home;
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel'; // Update this path as needed

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehichlePanel, setVehichlePanel] = useState(false);
  const [showRides, setShowRides] = useState(false); // Controls visibility

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const rideCardRef = useRef(null);

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

  // Animate the ride options card when both inputs are filled
  useEffect(() => {
    if (pickup && destination) {
      setShowRides(true); // Show the ride options when both inputs are filled
      gsap.fromTo(
        rideCardRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      setShowRides(false); // Hide the ride options when inputs are not filled
    }
  }, [pickup, destination]);

  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 left-5 top-5 absolute"
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

      {/* Overlay Content */}
      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          {/* Close Panel Button */}
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute text-xl opacity-0 right-6 top-6 cursor-pointer transition-opacity duration-300"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl py-2 font-semibold">Find a trip</h4>

          {/* Form */}
          <form onSubmit={submitHandler}>
            <div className="absolute h-16 w-1 top-[60%] left-10 bg-gray-900 rounded-full"></div>
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

        {/* Animated Location Search Panel */}
        <div
          ref={panelRef}
          className="opacity-0 bg-white p-5 overflow-hidden"
          style={{ height: '0%', display: 'none' }}
        >
          <LocationSearchPanel
            vehichlePanel={vehichlePanel}
            setVehichlePanel={setVehichlePanel}
          />
        </div>
      </div>

      {/* Combined Ride Options Card */}
      {showRides && (
        <div
          ref={rideCardRef}
          className="fixed z-10 bottom-0 w-full px-4 pb-4"
        >
          <div className="border-2 border-black rounded-t-2xl bg-white shadow-xl max-h-[60vh] overflow-y-auto p-4 space-y-4">
            <h3 className="text-lg font-semibold mb-2">Choose a Vehicle</h3>

            {/* UberGo Option */}
            <div className="flex items-center border rounded-lg p-3">
              <img
                className="w-16 h-12 object-cover"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                alt="UberGo"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-semibold text-sm">
                  UberGo <i className="ri-user-3-fill ml-1" /> 4
                </h4>
                <p className="text-xs text-gray-600">2 mins away</p>
                <p className="text-xs text-gray-500">Affordable, compact rides</p>
              </div>
              <h2 className="text font-semibold">₹193.20</h2>
            </div>

            {/* Moto Option */}
            <div className="flex items-center border rounded-lg p-3">
              <img
                className="w-16 h-12 object-cover"
src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                alt="Moto"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-semibold text-sm">
                  Moto <i className="ri-user-3-fill ml-1" /> 1
                </h4>
                <p className="text-xs text-gray-600">3 mins away</p>
                <p className="text-xs text-gray-500">Affordable motorcycle rides</p>
              </div>
              <h2 className="text font-semibold">₹65</h2>
            </div>

            {/* Auto Option */}
            <div className="flex items-center border rounded-lg p-3">
              <img
                className="w-16 h-12 object-cover"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" // Updated base64 issue
                alt="Auto"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-semibold text-sm">Auto</h4>
                <p className="text-xs text-gray-600">4 mins away</p>
                <p className="text-xs text-gray-500">Compact and budget-friendly</p>
              </div>
              <h2 className="text font-semibold">₹100</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
