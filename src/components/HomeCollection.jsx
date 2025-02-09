import React, {useMemo} from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



import HomeCollectionCard from './HomeCollectionCard';

const HomeCollection = ({products}) => {
   const homeProducts = useMemo(() => {
          const homeProducts = products.filter((product) => product.category.toLowerCase() === "home");
          return homeProducts;
   }, [products]) 
   console.log(homeProducts);


  return (
    <section className='px-6 py-[60px]'>
        <div className='w-full h-full'>
             <p className='flex items-center gap-4'><span className='w-[12px] h-[12px] bg-orange-500 shadow -rotate-45'></span> <span className='uppercase
             tracking-[2px] text-orange-500'>Home Decors Furnitures</span></p>
             <div className='flex flex-col lg:flex-row items-start lg:justify-between lg:items-center mt-4 gap-6'>
                 <h2 className='text-5xl font-bold font-PlayFair'>
                     Home Furnitures Collections
                 </h2>
                 <button className='bg-[#9E6747] px-6 py-3 capitalize tracking-widest text-lg text-white transition-all duration-200 ease-linear hover:bg-black'>
                     <Link to="/shop">
                     View all Products
                     </Link>
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
                       spaceBetween: 30   
                    },
                    1024: {
                       slidesPerView: 3,
                       spaceBetween: 30    
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 30
                    }
                 }} cssMode={true} onSwiper={(swiper) => console.log(swiper) }    className='w-full h-full'>
                      {homeProducts.map((product, index) => <SwiperSlide key={index}>
                        <HomeCollectionCard  product={product} />
                      </SwiperSlide>)} 
                 </Swiper>
             </div>
        </div> 
    </section>
  )
}

export default HomeCollection