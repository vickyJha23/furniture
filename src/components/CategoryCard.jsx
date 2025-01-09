import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ product }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 overflow-hidden'>
          <div className='max-w-[450px] max-h-[300px] flex justify-center items-start before:transition-all before:duration-200 before:ease-linear relative z-[1] before:absolute before:content-[""] before:w-full before:h-full before:bg-[#f9f9f9] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-[1] before:rounded-[25px] h-[289px] shadow before:border-2 before:border-transparent before:hover:border-yellow-700 rounded-[25px] overflow-hidden'>
             <Link to='/' className='h-full overflow-hidden flex items-center justify-center'>
                 <img src={product.image} className='w-[90%] object-cover' alt="" />
             </Link>

          </div>
         <div className='flex gap-2 flex-col justify-center items-center'>
         <h2 className='text-center text-2xl font-semibold tracking-widest'>{product.name}</h2>
         <p className='flex gap-2 text-center text-[#9E6647] font-light'><span>- </span> <span className='tracking-[2px] uppercase'>{product.quantity} items</span> <span> -</span></p>
         </div>
    </div>
  )
}

export default CategoryCard
