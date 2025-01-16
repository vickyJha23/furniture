import React from 'react'
import { Link } from "react-router-dom"


const HotspotLoader = () => {
  return (
    <div className='h-[350px] lg:h-auto md:block container mx-auto relative mt-[85px]' >
      <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/12/Hostspot-banner-01-bg-2048x1016.jpg" alt="()" className='w-full h-full object-cover' />
      <div className='bg-white transition-all duration-200 ease-linear absolute top-[90%] -translate-y-full md:top-2/3 lg:!top-[220px] left-8 shadow'>
          <div className='px-5 py-2 w-full h-full'>
              <div className='flex lg:flex-row-reverse justify-start items-center w-full h-full'>
                  <div className='hidden lg:flex items-center'>
                      <div className='-mr-[100px] width-clamp'>
                          <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/12/ff-hotspot-img-01.png" className='w-full' alt="()"/> 
                      </div>
                  </div>
                  <div className='flex justify-start items-center'>
                       <div className='space-y-2 overflow-hidden'>
                           <h3 className='font-semibold text-xl font-PlayFair'>Elegant Luxury Sofa</h3>
                           <p className='text-orange-500 text-sm uppercase tracking-widest'>124 Products</p>
                           <p className='hidden lg:block w-full'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                           <Link to="/" className='inline-block tracking-widest lg:!mt-5 transition-all duration-200 ease-linear hover:text-orange-500 relative group w-[88px]'>Shop Now
                           <span className='inline-block w-[5.4rem] h-[0.1rem] bg-black absolute bottom-1 left-0 transition-all duration-200 ease-linear translate-x-0 group-hover:-translate-x-full'></span>
                           <span className='inline-block w-[5.4rem] h-[0.1rem] bg-orange-500 absolute bottom-1 left-0 transition-all duration-200 ease-linear -translate-x-full group-hover:w-[5.4rem] group-hover:translate-x-0'></span>
                           </Link> 
                       </div>
                  </div>  
              </div>
          </div>
      </div> 
    </div>
  )
}

export default HotspotLoader
