import React from 'react'
import Marquee from "react-fast-marquee";




const MyMarquee = () => {
  return (
    <Marquee direction='right' className='' pauseOnHover={true} speed={100}>
        <div className='w-full flex gap-8 py-[70px] font-PlayFair'>
         <p className='text-2xl font-semibold'>IKEA</p>
         <p className='text-2xl font-semibold'>Ashley Furniture</p>
         <p className='text-2xl font-semibold'>Herman miller</p>
         <p className='text-2xl font-semibold'>Crate & Barrel</p>
         <p className='text-2xl font-semibold'>Wayfair</p>
         <p className='text-2xl font-semibold'>West Elm</p>
         <p className='text-2xl font-semibold'>Pottery Barn</p>
         <p className='text-2xl font-semibold'>La-z-Boy</p>
         <p className='text-2xl font-semibold'>CB2 (Crate & Barrel 2)</p>
         <p className='text-2xl font-semibold'>RH (Restoration Hardware)</p>
        </div>
    </Marquee>
  )
}

export default MyMarquee
