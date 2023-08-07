import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date())
      }, 1000)
  
      return () => {
        clearInterval(interval)
      };
    }, []);
  
    const formattedTime = time.toLocaleTimeString();

  return (
    <main
    className='flex flex-col pt-28 pb-20 xl:h-screen 
    justify-center items-center md:h-auto md:pt-36 md:pb-20'>
        <h1
        className='text-4xl mb-6'>
            Dashboard
            </h1>
        <p
        className='text-lg'>
            Hello Username
            </p>
        <p
        className=''>
            {formattedTime}
            </p>
    </main>
 )   
}

export default Dashboard