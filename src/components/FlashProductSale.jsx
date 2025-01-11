import React, { useState, useEffect} from 'react'

const FlashProductSale = () => {
  return (
    <div className='w-full h-[300px] py-16 px-6 flex items-center'>
        <div className='flex w-full justify-between items-center'>
            <div className='space-y-4'>
                <p className='flex items-center gap-4'><span className='inline-block w-[14px] h-[14px] bg-orange-500 -rotate-45 shadow'></span> <span className='uppercase tracking-[2px] text-orange-500'>shop now save</span></p>
                <h2 className='text-4xl font-bold font-PlayFair max-w-[350px]'>Hurry! Deals End Soon!</h2>
                <button className='bg-[#9E6747] px-8 py-3 text-lg text-white font-PlayFair !mt-5'>
                    Grab this Deals
                </button>
            </div>
            <div className='hidden'></div>
            <div className='flex gap-8 items-center'>
                  <div className='flex flex-col gap-2'>
                      <span className='text-4xl font-semibold text-center'>272</span>
                      <span className='border-b-2 border-black inline-block'></span>
                      <span className='text-center uppercase'>Days</span>
                  </div>    
                  <div className='flex flex-col gap-2'>
                      <span className='text-4xl font-semibold text-center'>12</span>
                      <span className='border-b-2 border-black inline-block'></span>
                      <span className='text-center uppercase'>Hrs</span>
                  </div>    
                  <div className='flex flex-col gap-2'>
                      <span className='text-4xl font-semibold text-center'>44</span>
                      <span className='border-b-2 border-black inline-block text-center'></span>
                      <span className='text-center uppercase'>Minutes</span>
                  </div>    
                  <div className='flex flex-col gap-2'>
                      <span className='text-4xl font-semibold'>30</span>
                      <span className='border-b-2 border-black inline-block'></span>
                      <span className='text-center uppercase'>Secs</span>
                  </div>    
            </div>
        </div>
    </div>
  )
}

export default FlashProductSale;
