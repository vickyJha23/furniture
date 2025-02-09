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


import { products } from '../assets/Static/staticdata';

const Home = () => {
  return( 
       <section className='w-full h-full'>
        <div className='container mx-auto px-4'>
            <Categories />  
            <HotspotLoader />  
            <FlashProductSale/>
            <PremiusShowCase products={products}/>
            <HomeCollection products= {products} />
            <Subscribe />
            <MyMarquee />
            <Feedback />
         </div>
        </section>
    )
}

export default Home
