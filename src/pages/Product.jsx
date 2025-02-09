import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'


// static data will be imported here..
import { products } from '../assets/Static/staticdata';
import StarRating from '../components/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faPlus, faMinus, faClock } from '@fortawesome/free-solid-svg-icons';


import OrderTimer from '../components/OrderTimer';


const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const parentImageRef = useRef(null);
    useEffect(() => {
        const product = products.find((product) => product.id === productId);
        setProduct(product);
    }, [productId]);

    const productDetailLabels = useMemo(() => {
         if(product) {
               const details = product.details;
               const detailsArr = Object.keys(details);
               return detailsArr.sort((a, b) => a.localeCompare(b));
          } 
          return [];
    }, [product])

    const handleImageClick = (image, index) => {
          if(parentImageRef.current){
              parentImageRef.current.src = image;
              setActiveImage(index);
          }
    }
   
  return (
    <section className='w-full py-[120px] bg-[#fff]'>
       <div className='container mx-auto'>
           <div className='w-full h-full grid lg:grid-cols-2 gap-16 pb-[60px]'>
                <div className='w-full h-full'>
                     <div className='w-full h-full grid grid-cols-[auto,1fr] gap-x-4'>
                         <div className='w-[150px] flex flex-col gap-4'>
                              {product?.images.map((image, index) => {
                                    return <div key={index} onClick={() => handleImageClick(image, index)} className={`w-[150px] h-[150px] flex justify-center items-center relative z-[1] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#f9f9f9] before:z-[-1] p-3 cursor-pointer ${activeImage === index ? 'border border-yellow-700' : 'border border-transparent'}`}>
                                       <img src={image} alt="" className='w-full h-full object-contain' />
                                 </div>
                              })} 
                         </div>
                          <div className='relative z-[1] flex justify-center items-center w-full h-full before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#f9f9f9] before:z-[-1]  max-h-[650px]'>
                              <img ref={parentImageRef} src={product?.images[0]} alt="" className='w-full h-auto object-contain' /> 
                          </div>
                     </div>
                </div>
                <div className='w-full h-full'>
                     <div className='w-full h-full grid grid-rows-[auto,auto,1fr]'>
                          <div className='border-b-2 border-[#ccc] space space-y-4 pb-8'>
                               <h3 className='uppercase tracking-[3px] font-medium'>{product?.company}</h3>
                               <h1 className='font-semibold text-4xl font-PlayFair tracking-[1px]'>{product?.name}</h1>    
                               <StarRating rating={product?.reviews?.rating} />
                          </div>
                          <div className='py-8 border-b-2 border-[#ccc]'>
                               <p className='flex gap-4'><span className='line-through text-[#333]'>{product?.price.original} Rs</span> <span className='text-black font-semibold'>{product?.price.discounted} Rs</span></p>    
                          </div>
                          <div className='py-4 space-y-4'>
                               <span className='inline-block bg-[#357239] text-center text-white px-3 py-1 uppercase text-sm tracking-widest'>{product?.stock} in stock</span>
                               <div className='flex gap-3'>
                                   <div className='border-2 flex items-center justify-between w-[150px] h-[50px]'>
                                        <button className='w-full h-full transition-all duration-200 ease-linear hover:text-[#9E6647]'>
                                             <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span className='w-full h-full flex justify-center items-center text-center'>
                                             <span>
                                                  1
                                             </span>
                                        </span>
                                        <button className='w-full h-full transition-all duration-200 ease-linear hover:text-[#9E6647]'>
                                             <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                   </div>
                                   <button className='bg-[#9E6647] px-6 text-white capitalize font-PlayFair tracking-[1px] flex items-center justify-center gap-2 transition-all duration-200 ease-linear hover:bg-[#000]'>
                                       <span>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </span>  
                                        <span>
                                            Add to cart
                                        </span>
                                   </button>
                                   <button className='bg-[#9E6647] px-6 text-white capitalize font-PlayFair tracking-[1px] flex items-center justify-center gap-2 transition-all duration-200 ease-linear hover:bg-[#000]'>
                                       <span>
                                           <FontAwesomeIcon icon={faHeart} />
                                       </span>  <span>
                                           Add to wishlist
                                         </span>    
                                   </button>
                                   <button className='bg-[#9E6647] px-6 text-white capitalize font-PlayFair tracking-[1px] transition-all duration-200 ease-linear hover:bg-[#000]'>
                                        Buy now     
                                   </button>
                               </div>
                               <p className='flex gap-4 '>
                                   <span className='text-[#9E6647]'>
                                       <FontAwesomeIcon icon={faClock} />
                                   </span>
                                   <span className='text-[#333] flex gap-2'>
                                        <span>Order in the next</span> <span>
                                             <OrderTimer endTime={"2025-01-27T23:59"} />
                                        </span>
                                        <span> to get it by <span className='text-[#9E6647]'>{product?.shippingDetails.deliveryDate}</span></span>
                                   </span>
                               </p>
                               <p className='flex gap-4'>
                                  <span className='text-[#9E6647]'>
                                       <FontAwesomeIcon icon={faShoppingCart} />
                                  </span> 
                                  <span> spend <span className='text-[#9E6647]'>Rs {product?.shippingDetails.freeShippingThreshold}</span> to get free shipping</span>
                               </p>
                               <div className='flex gap-2 flex-col 2xl:flex-row text-lg 2xl:items-center'>
                                   <p className='font-semibold font-PlayFair'>Guaranteed Checkout: </p>
                                   <p className='flex gap-3'>{product?.paymentOptions.map((paymentOption, index) => {
                                        return <span key={index} className='bg-[#ccc] px-2 py-1 text-sm capitalize font-PlayFair'>{paymentOption}</span>
                                   })}</p>
                               </div>
                          </div>
                     </div>
                </div>
           </div>
           <div>
           </div>
           <div>
              <div className='w-full h-[50px] flex items-center justify-center border-b'>
                  <div className='flex justify-center items-center gap-8'>
                    {productDetailLabels.map((label, index) => {
                         return <button key={index} className='capitalize font-PlayFair font-semibold'>
                                {label}
                         </button>
                    } )}
                   </div>
              </div>
              <div>
                    
              </div>
           </div>
       </div>
    </section>
  )
}

export default Product
