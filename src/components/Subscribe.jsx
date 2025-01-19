import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
const Subscribe = () => {
  return (
    <section className='bg-[#eeecec] w-full h-[50vh] relative'>
         <div className='flex w-full h-full items-center justify-end bg-cover lg:bg-[50%,auto] xl:bg-[60%,auto]' style={{
            backgroundImage: "url('https://furniforma.wpengine.com/wp-content/uploads/2024/12/Home-1-offer-bg-img-01.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom"
         }}>  
         </div>
         <div className='w-full h-full grid lg:grid-cols-[1fr,auto] absolute top-0 left-0'>
             <div className='hidden lg:block w-full'>
             </div>
             <div className='w-full h-full flex items-center bg-[rgba(238,236,236,0.8)] lg:bg-transparent'>
             <div className='w-full lg:w-[500px] lg:max-w-[500px] flex justify-center lg:justify-start items-center'>
                <div className='space-y-5 px-3'>
                <p className='flex justify-center lg:justify-start items-center gap-4'><span className='inline-block w-[12px] h-[12px] bg-[#9E6647] -rotate-45 shadow'></span> <span className='uppercase tracking-widest text-[#9E6647] text-sm'>style, savings, satifaction</span></p>    
                <h1 className='font-PlayFair text-4xl font-semibold text-center lg:text-left'>
                    <span>Enjoy </span><span className='text-[#9E6647]'> 40%</span><span> Savings</span>
                </h1>
                <p className='text-center mx-auto lg:text-left lg:mx-0 max-w-[500px] lg:w-full lg:max-w-max'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non culpa laboriosam eos natus repellendus odit?
                </p>
               <div className='flex border-2 border-black px-6'>
                   <input className='w-[70%] py-3 outline-none bg-transparent placeholder:text-black' type="email"  placeholder='Email'/>
                   <button className='w-[30%] px-3 py-3 flex justify-center gap-2 items-center'>
                        <span className='capitalize tracking-widest'>subscribe</span>
                        <span className='flex items-center'><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                   </button>
               </div>
               <p className='text-sm text-center mx-auto max-w-[600px] lg:text-left lg:mx-0 lg:max-w-max'>*By submitting this form, you agree to receive Furiforma's email newsletter and promotional offers. <Link to = "" className='underline'>Terms and Condition</Link> Apply.</p>
                </div>
            </div>
             </div>
          </div>   
    </section>
  )
}

export default Subscribe
