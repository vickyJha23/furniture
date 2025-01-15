import React from 'react'


// components import here...
import Categories from '../components/Categories';
import HotspotLoader from '../components/HotspotLoader';
import FlashProductSale from '../components/FlashProductSale';
import PremiusShowCase from '../components/PremiusShowCase';
import HomeCollection from '../components/HomeCollection';

const Home = () => {
  return( 
       <section className='bg-[#FAF7F2] px-4'>
            <Categories />  
            <HotspotLoader />  
            <FlashProductSale/>
            <PremiusShowCase/>
            <HomeCollection />
        </section>
    )
}

export default Home
