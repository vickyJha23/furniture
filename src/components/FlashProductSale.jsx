import React, { useState, useEffect} from 'react'

import SaleTimer from './SaleTimer';

const FlashProductSale = () => {
     const saleTime = "2025-01-18"

  return (
    <div className='w-full py-16 px-6 flex items-center border-b-2'>
        <div className='flex w-full flex-col xl:flex-row gap-10 items-center'>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
              <div className='w-[60%] space-y-4 flex flex-col items-center lg:items-start'>
                  <p className='flex justify-center lg:justify-start items-center gap-4'><span className='inline-block w-[14px] h-[14px] bg-orange-500 -rotate-45 shadow'></span> <span className='uppercase tracking-[2px] text-orange-500 text-nowrap'>shop now save</span></p>
                   <h2 className='w-full text-4xl font-bold font-PlayFair text-center mx-auto lg:mx-0 lg:text-left lg:max-w-[350px]'>Hurry! Deals End Soon!</h2>
                   <button className='bg-[#9E6747] w-[200px] px-8 py-3 text-lg text-white font-PlayFair !mt-8 transition-all duration-200 ease-linear hover:bg-black hover:text-white'>
                    Grab this Deals
                   </button>
            </div>
             <div className='hidden xl:block w-[40%]'>
                  <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/12/Home-1-counter-bg-img-01.png" className='' alt="w-full max-w-full" />
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <SaleTimer endTime={saleTime} />
            </div>
        </div>
    </div>
  )
}

export default FlashProductSale;
