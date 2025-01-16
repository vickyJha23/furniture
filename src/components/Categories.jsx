import React from 'react';



import MySwiper from './MySwiper';


const Categories = () => {
  return (
    <section className='container mx-auto pt-[60px] flex items-center relative z-0'>
      <div className='w-full flex flex-col justify-center'>
        <div className='max-w-[500px] space-y-4'>
            <p className='flex items-center gap-6'><span className='inline-block w-[12px] h-[12px] bg-orange-500 -rotate-45 shadow'></span> <span className='uppercase tracking-[2px] text-orange-500 font-nunito'>shop smart, shop sorted</span></p>
            <h1 className='capitalize font-PlayFair font-semibold text-4xl'>Discover By Category</h1>
            <p className='text-sm !mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci, quibusdam maiores totam aliquid a dignissimos praesentium aut rem enim excepturi cum, repellendus velit, atque inventore eveniet obcaecati corporis quos.
            </p>
        </div>
         <MySwiper />
      </div>
    </section>
  )
}

export default Categories
