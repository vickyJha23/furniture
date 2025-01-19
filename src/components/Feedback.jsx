import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// static data import here
import { comments } from "../assets/Static/staticdata.js"

import FeedbackCard from './FeedbackCard.jsx';

const Feedback = () => {
  return (
    <section className='bg-[#F7F0EE] lg:h-[50vh] relative z-[1] flex items-center py-[60px] px-[30px]'>
        <div className='w-full h-full relative z-[1]'>
         <Swiper className="mb-6 w-full h-full" modules={[Navigation, EffectFade]} loop={true} effect='fade' fadeEffect={{crossFade: true}} navigation={{
            nextEl: "#swiper-nextElm",
            prevEl: "#swiper-prevElm",
    
       }} spaceBetween={30} speed={1000}>
            {comments.map((comment, index) => <SwiperSlide key={index}>
                <FeedbackCard comment={comment} />
            </SwiperSlide>)}
          </Swiper>
       <div className='absolute top-full justify-center gap-8 -translate-y-[80px] lg:top-1/2 lg:translate-y-0 lg:justify-between w-full flex left-0 z-10'>
           <div id='swiper-prevElm' className='w-[40px] h-[40px] flex items-center justify-center border-2 border-black -rotate-45'>
                <FontAwesomeIcon className='rotate-45 text-lg' icon={faArrowLeft} />
           </div>
           <div id='swiper-nextElm' className='w-[40px] h-[40px] flex items-center justify-center border-2 border-black -rotate-45'>
                <FontAwesomeIcon className='rotate-45 text-lg' icon={faArrowRight} />
           </div>
       </div>
        </div>
    </section>
  )
}

export default Feedback
