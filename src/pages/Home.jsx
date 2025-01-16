import React from 'react'


// components import here...
import Categories from '../components/Categories';
import HotspotLoader from '../components/HotspotLoader';
import FlashProductSale from '../components/FlashProductSale';
import PremiusShowCase from '../components/PremiusShowCase';
import HomeCollection from '../components/HomeCollection';
import Subscribe from '../components/Subscribe';
import MyMarquee from '../components/Marquee';
import Feedback from '../components/Feedback';

const Home = () => {
  return( 
       <section className='bg-[#FAF7F2] px-4 pb-[2000px]'>
            <Categories />  
            <HotspotLoader />  
            <FlashProductSale/>
            <PremiusShowCase/>
            <HomeCollection />
            <Subscribe />
            <MyMarquee />
            <Feedback />
        </section>
    )
}

export default Home
