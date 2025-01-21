import React from 'react'

const Products = () => {
  return (
    <section className='w-full h-[100vh] bg-red-400'>
         <div className='container mx-auto w-full h-full'>
             <div className='w-full h-full grid grid-cols-[300px,1fr]'>
                  <div className='w-full bg-yellow-300'>

                  </div>
                  <div className='w-full bg-pink-300 grid grid-rows-[150px,1fr]'>
                       <div className='bg-amber-400 border-b-2'>

                       </div>
                       <div>

                       </div>
                  </div>
             </div>
         </div>
    </section>
  )
}

export default Products