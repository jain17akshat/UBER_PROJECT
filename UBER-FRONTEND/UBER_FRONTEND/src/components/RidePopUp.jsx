import React from 'react';

const RidePopUp = (props) => {
    return (
        <div className="relative p-4">
            {/* Close button */}
            <h5 
                className="p-1 text-center w-[93%] absolute top-0 cursor-pointer" 
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

            {/* Ride Information */}
            <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img 
                        className="h-12 rounded-full object-cover w-12" 
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" 
                        alt="Rider"
                    />
                    <h2 className="text-lg font-medium">Harshi Pateliya</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>

            {/* Pickup Location */}
            <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Bhopal</p>
                </div>
            </div>

            {/* Fare Information */}
            <div className="flex items-center gap-5 p-3">
                <i className="ri-currency-line"></i>
                <div>
                    <h3 className="text-lg font-medium">₹193.20</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 w-full">
                <button 
                    onClick={() => {
                        props.setConfirmRidePopupPanel(true);
                    }} 
                    className="bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg"
                >
                    Accept
                </button>
                <button 
                    onClick={() => props.setRidePopupPanel(false)} 
                    className="mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg"
                >
                    Ignore
                </button>
            </div>
        </div>
    );
};

export default RidePopUp;
