import React from 'react'
import Star from './Star'



const StarRating = ({rating}) => {
  return (
      <div className='flex gap-2'>
          { Array.from({ length: 5}, (_, index) => {
            return <Star key = {index} starRating = {index < rating } />
       } )}
      </div>  
  )
}

export default StarRating