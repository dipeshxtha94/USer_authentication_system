import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { setHomePageFlag, setMenuFlag } from '../globalRedux/slice'

const Sidebar = () => {

  const dispatch = useDispatch()

  const handleMenu = () => {
    dispatch(setMenuFlag(false))
  }

  const handleDashboardClick = () => {
    dispatch(setHomePageFlag('dashboard'))
  }

  const handleUSerlistClick = () => {
    dispatch(setHomePageFlag('userlist'))
  }
  return (
    <div
      className='w-full flex flex-col justify-center
     items-center pl:0 xl:pl-3 pt-4'>
      <section
        className='w-full flex justify-end mr-2 xl:mr-5'>
        <HiMenuAlt1
          className='text-base md:text-lg xl:text-3xl hover:cursor-pointer'
          onClick={handleMenu} />
      </section>
      <p
        onClick={handleDashboardClick}
        className='text-sm xl:text-2xl mb-2 hover:cursor-pointer pt-12'>
        Dashboard
      </p>
      <p
        onClick={handleUSerlistClick}
        className='text-sm xl:text-2xl hover:cursor-pointer'>
        User List
      </p>
    </div>
  )
}

export default Sidebar