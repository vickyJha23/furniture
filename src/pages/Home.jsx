import React from 'react'


// components import here...
import Categories from '../components/Categories';
import HotspotLoader from '../components/HotspotLoader';
import FlashProductSale from '../components/FlashProductSale';

const Home = () => {
  return( 
       <section className='bg-[#FAF7F2] px-4'>
            <Categories />  
            <HotspotLoader />  
            <FlashProductSale />
        </section>
    )
}

export default Home
