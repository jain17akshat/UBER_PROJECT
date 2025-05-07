// import React from 'react'

// const LocationSearchPanel = () => {
//     const locations=[
//         "Solapur",
//         "RISHABHDEV",
//         "Udaipur",

//     ]



//   return (
    
//     <div>


//         {
//     locations.map(function(elem){
//         return (
        
//         <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//         <h4 className='font-medium'>{elem}</h4>
//     </div>
//         )
//     })
// }

       
        
//     </div>
//   )
// }

// export default LocationSearchPanelimport React from 'react';

// import React from 'react'

// const LocationSearchPanel = (props) => {
    
//     const locations = [
//         "Solapur",
//         "RISHABHDEV",
//         "Udaipur",
//     ];

//     const handleSuggestionClick = (location) => {
//         console.log(`Clicked: ${location}`);
//     };

//     return (
//         <div>
//             {
//                 locations.map(function(elem, idx){
//                     return (
                        
//                         <div 
//                         onClick={()=>{
//                             props.setVehicle(true)
//                         }}
//                             key={idx} 
//                             onClick={() => handleSuggestionClick(elem)} 
//                             className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
//                         >
//                             <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
//                                 <i className="ri-map-pin-fill"></i>
//                             </h2>
//                             <h4 className='font-medium'>{elem}</h4>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// };

// export default LocationSearchPanel;
import React, { useState } from 'react';

const LocationSearchPanel = () => {
    const [showVehicles, setShowVehicles] = useState(false);

    const locations = [
        "Solapur",
        "RISHABHDEV",
        "Udaipur",
    ];

    const handleSuggestionClick = (location) => {
        console.log(`Clicked: ${location}`);
        setShowVehicles(true);
    };

    return (
        <div className="p-4">
            {/* Location options */}
            <div>
                {locations.map((location, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(location)}
                        className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer'
                    >
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{location}</h4>
                    </div>
                ))}
            </div>

            {/* Vehicles Section - shows only after location click */}
            {showVehicles && (
                <div className='mt-6 border-2 rounded-xl p-4 shadow-md bg-white'>
                    <h3 className='text-lg font-semibold mb-4'>Choose Your Vehicle</h3>

                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-2'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Toyota_Yaris_Icon_Tech_VVT-i_1.5_Front.jpg/320px-Toyota_Yaris_Icon_Tech_VVT-i_1.5_Front.jpg' alt='UberGo' className='w-12 h-12 object-cover rounded' />
                            <div>
                                <h4 className='font-semibold'>UberGo</h4>
                                <p className='text-sm text-gray-500'>2 mins away · Affordable, compact rides</p>
                            </div>
                        </div>
                        <p className='font-semibold'>₹190.2</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2018_Toyota_Camry_SE_in_Celestial_Silver%2C_front_left.jpg/320px-2018_Toyota_Camry_SE_in_Celestial_Silver%2C_front_left.jpg' alt='Uber Premium' className='w-12 h-12 object-cover rounded' />
                            <div>
                                <h4 className='font-semibold'>Uber Premium</h4>
                                <p className='text-sm text-gray-500'>5 mins away · Luxury comfort rides</p>
                            </div>
                        </div>
                        <p className='font-semibold'>₹290.0</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationSearchPanel;
