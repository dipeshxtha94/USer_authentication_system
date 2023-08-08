import React, { useState, useEffect } from 'react'
import Logout from './logout';

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
    className='w-3/4 md:w-4/5 xl:w-3/4 flex flex-col pt-5'>
      <section
      className='flex justify-end align-middle items-center hover:cursor-pointer'>
      <Logout className=''/>
      </section>
    <section className='flex flex-col pt-28 pb-20 xl:h-screen 
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
    </section>
    </main>

 )   
}

export default Dashboard