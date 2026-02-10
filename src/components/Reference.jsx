

import React from 'react'
import refImage from '../assets/images/fullimage.png'

const Reference = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <p className='text-center text-base sm:text-lg md:text-xl font-semibold font-serif text-purple-600'>
          Reference Image
        </p>
        <div className="rounded-2xl shadow-xl overflow-hidden border-4 border-pink-200 bg-white/90 backdrop-blur-sm">
          <img 
            className='w-[180px] h-[270px] sm:w-[195px] sm:h-[293px] md:w-[210px] md:h-[315px] lg:w-[225px] lg:h-[338px] object-cover' 
            src={refImage} 
            alt="reference-Image" 
          />
        </div>
      </div>
    </div>
  )
}

export default Reference