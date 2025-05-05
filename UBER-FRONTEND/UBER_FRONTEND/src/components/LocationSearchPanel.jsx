import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
        {/* this is a dummy data*/ }
        <div className='flex font-semibold my-6  gap-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='font-medium'> 24B,Near bhupawat bhwan</h4>
        </div>

        <div className='flex font-semibold my-6  gap-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='font-medium'> Near Ploice bhwan</h4>
        </div>


        <div className='flex font-semibold my-6  gap-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='font-medium'> SOlapur</h4>
        </div>


        <div className='flex font-semibold my-6  gap-4 items-center justify-start'>
            <h2 className='bg-[#eee] h-7 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
            <h4 className='font-medium'> Udaipur </h4>
        </div>
        

        
    </div>
  )
}

export default LocationSearchPanel