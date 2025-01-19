import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faYoutube, faXTwitter, faThreads} from "@fortawesome/free-brands-svg-icons"
import Map from './Map';

// static data will be imported here 
import imagesCollection from '../assets/Images/images';

const Footer = () => {
  return (
    <section className='pt-[60px] lg:py-0 overflow-hidden'>
         <div className='h-full lg:h-[50vh] flex items-center container mx-auto px-4'>
             <div className='grid gap-10 lg:grid-cols-[auto,auto,1fr] w-full'>
                  <div className='w-[300px] max-w-[400px] space-y-4'>
                      <Logo/>
                      <p className='max-w-[280px] leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsam id ut possimus magnam quasi quas vero itaque.</p>
                      <div className='grid grid-cols-2 gap-6'>
                         <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/10/google-play-button.jpg" alt="" className='w-full' />
                          <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/10/app-store-button.jpg" alt="" className='w-full' />
                      </div>
                  </div>
                  <div className='max-w-[300px]'>
                      <div className='w-full h-auto'>
                      <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                          <address className='space-y-4 px-2'>
                            <p className='flex items-center gap-4 not-italic'>
                                <span>
                                     <FontAwesomeIcon className='text-[#9E6647] text-xl' icon={faLocationDot} />
                                </span> 
                                <span className='text-lg'>
                                    No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                                </span> 
                            </p>
                            <p className='flex items-center gap-4 not-italic'>
                                 <span>
                                     <FontAwesomeIcon className='text-[#9E6647] text-xl' icon={faEnvelope} />
                                 </span> 
                                <span className='text-lg'>
                                    info@example.com
                                </span>
                            </p>
                            <p className='flex items-center gap-4 non-italic'>
                                 <span>
                                     <FontAwesomeIcon  className='text-[#9E6647] text-xl' icon={faPhone} />
                                 </span> 
                                <span className='text-lg not-italic'>
                                    000 - 123 - 456789
                                </span>
                            </p>
                          </address>
                      </div>
                      <div className='flex gap-4 mt-4 px-2'>
                          <FontAwesomeIcon className='text-xl transition-all duration-200 ease-linear hover:text-[#9E6647] cursor-pointer' icon={faThreads} /> 
                          <FontAwesomeIcon className='text-xl transition-all duration-200 ease-linear hover:text-[#9E6647] cursor-pointer' icon={faInstagram} /> 
                          <FontAwesomeIcon className='text-xl transition-all duration-200 ease-linear hover:text-[#9E6647] cursor-pointer' icon={faFacebookF} /> 
                          <FontAwesomeIcon className='text-xl transition-all duration-200 ease-linear hover:text-[#9E6647] cursor-pointer' icon={faYoutube} /> 
                          <FontAwesomeIcon className='text-xl transition-all duration-200 ease-linear hover:text-[#9E6647] cursor-pointer' icon={faXTwitter} /> 
                      </div>  
                  </div>
                  <div className=''>
                       <Map /> 
                  </div>    
             </div>
         </div> 
         <div className='flex items-center py-5'>
            <div className='container mx-auto h-full flex flex-col
            lg:flex-row justify-between items-center gap-4 px-4'>
                 <p className='order-3 lg:order-1'>
                    All Rights Reserved &copy; 2024 <span className='underline'>FurniForma</span>
                 </p>
                 <div className='flex flex-wrap justify-center items-center gap-x-6 order-2'>
                    <img src={imagesCollection.amazonPay} alt="" />
                    <img src={imagesCollection.googlePay} alt="" />
                    <img src={imagesCollection.masterCard} alt="" />
                    <img src={imagesCollection.visaCard} alt="" />
                    <img src={imagesCollection.phonePe} alt="" className='w-[40px] h-[40px]' />
                    <img src={imagesCollection.rupay} alt="" className='w-[40px] h-[40px]' />
                 </div>
                 <div className='flex gap-4 order-1 lg:order-3'>
                     <Link to="" className='transition-all duration-200 ease-linear hover:text-[#9E6647]'>
                         Terms And Condition
                     </Link>
                     <p>|</p>
                     <Link to="" className='transition-all duration-200 ease-linear hover:text-[#9E6647]'>
                          Privacy Policy
                     </Link>
                 </div>
            </div>  
         </div>
    </section>
  )
}

export default Footer

