import React from 'react'


// static data import
import imagesCollection from '../assets/Images/images'

const Hero = () => {
  return (
    <section className='h-auto w-full bg-[#FAF7F2] transition-all duration-200 ease-linear container mx-auto'>
      <div className='max-w-[120px] md:max-w-[144px] xl:max-w-[150px] absolute top-0 left-1/4'>
        <img src={imagesCollection.lightImage} alt="()" width="244" height="400" className='w-full h-full' />
      </div>
      <div className='w-full h-full flex flex-col gap-10 justify-center md:flex-row'>
        <div className='flex flex-col justify-center space-y-8 md:w-[65%] py-16 md:py-32'>
          <div className='w-full flex flex-col justify-center  gap-8 md:pr-[30%]'>
            <div className='w-full flex flex-col justify-center space-y-4'>
              <h4 className='flex items-center gap-2'>
                <span className='w-[12px] h-[12px] bg-orange-500 inline-block shadow-md -rotate-45'>
                </span>
                <span className='uppercase text-sm tracking-widest text-orange-500'>
                  Stylish Furnitures
                </span>
              </h4>
              <h2 className='clamp font-bold font-PlayFair leading-tight'>
                <span className='inline-block'>Sustainable <span className='text-orange-500 inline-block'> Chairs</span> For Every Space
                </span>
              </h2>
              <p className='pr-[5%] md:pr-[20%]'>Sodales ridiculus lacus laoreet dictum curae maximus, viverra tortor eget, rutrum enim. Vivamus sed lacus ligula. Nam malesuada pellentesque mi, non eleifend ipsum ullamcorper id. Etiam vehicula tellus sem.</p>
            </div>
            <button className='bg-[#9E6647] w-[200px] py-3 px-3 capitalize font-bold text-white'>
              view Our Collection
            </button>
          </div>
        </div>
        <div className='md:w-[35%]'>
          <div className='h-full bg-[#F6F0E6] rounded-tl-[50em] relative flex items-center'>
            <div className='absolute inset-0 rounded-tl-[50em] -z-[1]'>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className='md:-ml-[150px]'>
                <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/09/Home-1-slider-img-01.png" className='transition-all duration-200 ease-linear w-full h-full max-w-[376px] md:max-w-[510px] lg:max-w-max' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#F9F7F1] flex relative z-[1] pt-8'>
                     <div className='w-full h-full flex flex-col gap-10 lg:flex-row lg:items-stretch items-center'>
                          <div className='w-full lg:w-1/2 order-2 lg:order-1 h-full bg-[#313131] pt-[4%] pr-[6%] pb-[4%] pl-[4%] rounded-tr-[50em] relative flex items-center justify-center'>
                              <div className='absolute'></div>
                              <div className='w-full h-full flex'>
                                  <div className='w-full flex flex-col gap-8 justify-center items-center sm:flex-row'>
                                      <div className='ww-full flex justify-center items-center md:w-1/2'>
                                          <div className='md:-mt-[32%] transition-all duration-200 ease-linear flex justify-center items-center'>
                                          <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/12/home-01-slider-buttom-2.png" alt="" className='w-full max-w-[360px]' /> 
                                          </div>
                                      </div>
                                      <div className='w-full md:w-1/2'>
                                           <div className='text-white text-center sm:text-left   space-y-2'>
                                               <p className='uppercase tracking-[2px] font-thin'>Twillow</p>
                                               <h3 className='text-2xl font-bold font-PlayFair'>Living Room Sofa</h3>
                                               <p>$125</p>
                                               <button className='bg-[#9E6647] px-8 py-2 tracking-[1px] !mt-4 transition-all duration-200 ease-linear hover:bg-white hover:text-black !cursor-pointer'>
                                                    Shop Now
                                                </button> 
                                           </div> 
                                      </div>    
                                  </div>
                                  <div className='hidden md:block'>
                                      <div className='absolute bottom-[30px] right-0 md:max-h-[310px] lg:max-h-[550px]'>
                                      <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/09/Home-1-slider-lamp-img.png" className='md:max-h-[310px] lg:max-h-[510px]' alt="" />
                                      </div>
                                  </div>
                              </div>  
                          </div>
                          <div className='w-full px-4 lg:w-1/2 order-1 flex justify-center items-center lg:order-2'>
                              <div className='flex justify-center items-stretch md:pb-20 lg:pb-0'>
                                   <div className='flex flex-col sm:flex-row flex-wrap'>
                                       <div className='w-full sm:w-1/2 md:w-1/3 transition-all duration-200 ease-linear py-5 md:py-0 px-10 space-y-4 sm:border-r-[1px] sm:border-[#ccc]'>
                                           <h1 className='text-center font-bold flex items-center justify-center sm:justify-start'><span className='text-4xl'>12</span> <span className='text-5xl'> K</span></h1>
                                           <p className='w-full xl:w-4/5 text-sm lg:text-base'>Premium Furniture Built To Last</p> 
                                       </div>
                                       <div className='w-full transition-all duration-200 ease-linear sm:w-1/2 md:w-1/3 py-5 md:py-0 px-10 space-y-4 md:border-r-[1px] md:border-[#ccc]'>
                                            <h1 className='font-bold flex  justify-center sm:justify-start items-center'><span className='text-4xl'>100</span> <span className='text-5xl font-light'>+</span></h1>
                                            <p className='w-full xl:w-4/5 text-sm lg:text-base'>Distinctive Aesthetic Designs</p>
                                       </div>
                                       <div className='w-full transition-all duration-200 ease-linear sm:w-1/2 md:w-1/3 py-5 md:py-0 px-10 space-y-4'>
                                            <h1 className='font-bold flex justify-center sm:justify-start items-center'><span className='text-4xl'>1</span> <span className='text-5xl'>K</span><span className='text-5xl font-light'>+</span></h1>
                                            <p className='w-full xl:w-4/5 text-sm lg:text-base'>Delighted Customers Every Day</p>
                                        </div>                                  
                                   </div>    
                              </div>  
                          </div>  
                     </div>  
      </div>   
    </section>
  )
}

export default Hero
