import React, {useState, useEffect} from 'react'

const SaleTimer = ({endTime}) => {
     const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        if(difference > 0){
            const timeLeft  = {
                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                 hours:Math.floor(difference / (1000 * 60* 60) % 24),
                 minutes: Math.floor(difference / (1000 * 60) % 60),
                 seconds: Math.floor((difference / 1000) % 60)
            }
            return timeLeft; 
        }
        return null
     }
   
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        return () => clearInterval(intervalId);
    }, [endTime])


   if(!timeLeft){
        return <div className='text-center'>
             <h3 className='text-2xl font-bold uppercase tracking-widest'>Sale is Over</h3>
        </div>
     }
  return (
   <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-y-4 gap-x-8'>
        <div className='flex flex-col gap-6'>
                  <span className='text-5xl lg:text-8xl font-semibold text-center font-PlayFair'>{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days}</span>
                  <span className='border-b-2 border-black inline-block'></span>
                  <span className='text-center uppercase font-thin'>Days</span>
        </div>    
        <div className='flex flex-col gap-6'>
                  <span className='text-5xl lg:text-8xl font-semibold text-center font-PlayFair'>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</span>
                  <span className='border-b-2 border-black inline-block'></span>
                  <span className='text-center uppercase font-thin'>Hrs</span>
        </div>    
        <div className='flex flex-col gap-6'>
                  <span className='text-5xl lg:text-8xl font-semibold text-center font-PlayFair'>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</span>
                  <span className='border-b-2 border-black inline-block text-center'></span>
                  <span className='text-center uppercase font-thin'>Minutes</span>
        </div>    
        <div className='flex flex-col gap-6'>
                  <span className='text-5xl lg:text-8xl font-semibold font-PlayFair text-center'>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
                  <span className='border-b-2 border-black inline-block'></span>
                  <span className='text-center uppercase font-thin'>Secs</span>
        </div>    
        </div>
        ) 
}

export default SaleTimer