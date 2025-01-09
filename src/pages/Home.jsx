import React from 'react'


// components import here...
import Categories from '../components/Categories';
import HotspotLoader from '../components/HotspotLoader';

const Home = () => {
  return( 
       <section className='bg-[#FAF7F2] px-4'>
            <Categories />  
            <HotspotLoader />  
        </section>
    )
}

export default Home
