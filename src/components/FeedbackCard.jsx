import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const FeedbackCard = ({comment}) => {
    return (
        <div className='transition-all duration-200 ease-linear w-full lg:max-w-[850px] xl:max-w-[1280px] mx-auto h-full px-6 grid lg:grid-cols-[auto,1fr] gap-8 lg:gap-16 items-center'>
            <div className='flex w-full flex-col space-y-4'>
                <div className='bg-white p-3 w-full lg:max-w-[250px] xl:max-w-[450px]'>
                    <img src="https://furniforma.wpengine.com/wp-content/uploads/2024/12/testimonial-img-01.jpg" alt="()" className='w-full h-full' />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-PlayFair font-bold'>{comment.productName}</h3>
                    <p className='font-PlayFair'>27000 Rs</p>
                </div>
            </div>
            <div className='space-y-2'>
                <h1 className='text-5xl flex lg:gap-8 font-semibold font-PlayFair'>
                    <span className=''>
                        <FontAwesomeIcon color='#9E6647' icon={faQuoteRight} />
                    </span>
                    <span className='hidden xl:block'>
                        Feedback fuels Us
                    </span></h1>
                <p className='text-sm max-w-[450px] !mt-4'>
                  {comment.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium laboriosam doloremque magnam in aliquid repellat, dolor vel autem debitis a incidunt? Excepturi repellendus quidem doloremque dolorum accusantium obcaecati delectus corrupti labore ut? Excepturi hic cupiditate, quis repellendus libero eveniet.
                </p>
                <div className='flex items-center gap-5 !mt-6'>
                    <img src={comment.avatar} alt="" className='w-20 h-20 rounded-[50%] object-cover' />
                    <div className='space-y-1'>
                        <h4 className='font-bold text-2xl font-PlayFair tracking-widest'>{comment.author}</h4>
                        <p className='text-[#9F6546]'>HR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard
