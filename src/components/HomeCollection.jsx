import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import products from '../assets/Static/staticdata';
import HomeCollectionCard from './HomeCollectionCard';

const HomeCollection = () => {
  return (
    <section className='px-6'>
        <div>
             <p className='flex items-center gap-4'><span className='w-[12px] h-[12px] bg-orange-500 shadow -rotate-45'></span> <span className='uppercase
             tracking-[2px] text-orange-500'>Home Decors Furnitures</span></p>
             <div className='flex flex-col lg:flex-row items-start lg:justify-between lg:items-center mt-4 gap-6'>
                 <h2 className='text-5xl font-bold font-PlayFair'>
                     Home Furnitures Collections
                 </h2>
                 <button className='bg-[#9E6747] px-6 py-3 capitalize tracking-widest text-lg text-white transition-all duration-200 ease-linear hover:bg-black'>
                     View all Products
                 </button>
             </div>
             <div className='py-10 w-full h-full'>
                 <Swiper modules={[Pagination]} pagination={{
                    clickable: true,
                    renderBullet: function (_, className) {
                         return `<span class="${className} relative">
                         </span>
                         ` 
                    }
                 }} breakpoints={{
                    0: {
                       slidesPerView: 1
                    },
                    768: {
                       slidesPerView: 2,
                       spaceBetween: 20   
                    },
                    1024: {
                       slidesPerView: 4,
                       spaceBetween: 10    
                    }
                 }} cssMode={true} onSwiper={(swiper) => console.log(swiper) }    className='w-full h-full'>
                      {products.map((product, index) => <SwiperSlide key={index}>
                        <HomeCollectionCard  product={product} />
                      </SwiperSlide>)} 
                 </Swiper>
             </div>
        </div> 
    </section>
  )
}

export default HomeCollection