import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// here static data will be imported 
import CategoryCard from './CategoryCard';

const MySwiper = ({products}) => {
  return (
    <div className='relative'>
      <Swiper modules={[Navigation]} spaceBetween={30} navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }} className=' w-full !pt-5 select-none' breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }}>
        {products.map((product, index) => <SwiperSlide className='w-full' key={index}>
          <CategoryCard product={product} />
        </SwiperSlide>)}
      </Swiper>
      <div className='w-full flex gap-10 justify-center items-center mt-8 md:mt-0 absolute -bottom-8 md:bottom-[500px] md:justify-end'>
        <div className='swiper-prev cursor-pointer flex justify-center items-center transition-all duration-200 ease-linear hover:text-orange-500 hover:border-orange-500'>
          <FontAwesomeIcon icon={faArrowLeft} className='text-3xl rotate-45' />
        </div>
        <div className='swiper-next cursor-pointer flex justify-center items-center transition-all duration-200 ease-linear hover:text-orange-500 hover:border-orange-500'>
          <FontAwesomeIcon icon={faArrowRight} className='text-3xl rotate-45' />
        </div>
      </div>
    </div>
  )
}

export default MySwiper
