import React, { useState } from 'react';
import { HiBellAlert } from "react-icons/hi2";


const NewAnnouncements = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className={`fixed bottom-40 left-9 transition-opacity duration-300 `}>
      {/* button to open the pop-up */}
      <button
        className="flex items-center p-3 rounded-full bg-tb text-white animate-pulse animation-duration-10s focus:outline-none hover:bg-blue-600 transform transition-transform "
        onClick={() => {
          setImageUrl(require(`./news.jpg`));
          setIsPopupOpen(true);
        }}
      >
       <HiBellAlert className='text-3xl'/>അറിയാത്തൊരു അയ്യപ്പപ്പണിക്കർ 
      </button>

      {/* pop-up window */}
      {isPopupOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-5/12">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-gray-400 h-auto w-auto  flex justify-center items-cente "><img src={imageUrl} alt="" /></div>
                <div className="p-4">
                  <button
                    className="float-right text-tb  font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setIsPopupOpen(false);
                      setImageUrl('');
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default NewAnnouncements