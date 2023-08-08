import React, { useState, useEffect } from 'react'
import Logout from '../screens/logout';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const [time, setTime] = useState(new Date())

  const { user } = useSelector((state) => state.user)

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
      className='w-full flex flex-col pt-5'>
      <section
        className='flex justify-end align-middle items-center'>
        <Logout />
      </section>
      <section className='flex flex-col pt-20 pb-20 
    justify-center items-center md:h-auto md:pt-36 md:pb-20'>
        <h1
          className='text-4xl mb-6'>
          Dashboard
        </h1>
        <p
          className='text-lg'>
          Hello {user}
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