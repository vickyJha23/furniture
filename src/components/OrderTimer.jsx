import React, {useEffect, useState} from 'react'

const OrderTimer = ({endTime}) => {
    const calculateTimeLeft = () => {
        const futureTimeStamp = new Date(endTime).getTime();
        const now = new Date().getTime();
        const difference = futureTimeStamp - now;
        if(difference > 0){
            const timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }; 
            return timeLeft;
        }
        
        return null;
    }    
    const [time, setTime] = useState(calculateTimeLeft());
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedTime = calculateTimeLeft(); 
            setTime(updatedTime);
            if(!updatedTime){
                 clearInterval(intervalId);   
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, [endTime])


    if(!time){
        return <span>!Time's up</span>
    }

  return (
        <span className='text-[#9E6647]'><span>{time.hours} hours</span> <span>{time.minutes} minutes</span> <span>{time.seconds} seconds</span></span>
    )
}

export default OrderTimer
