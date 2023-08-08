import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setHomePageFlag } from '../globalRedux/slice'

const Sidebar = () => {

  const dispatch= useDispatch()

  const navigate= useNavigate()

    const handleMenu=()=>{
        
    }

    const handleDashboardClick= ()=>{
       dispatch(setHomePageFlag('dashboard'))
    }

    const handleUSerlistClick= ()=>{
      dispatch(setHomePageFlag('userlist'))
    }
  return (
    <div
    className='w-1/4 xl:w-1/4 md:w-1/5 flex flex-col justify-center pl-3 pt-8'>
        <div
        className=''>
             <HiMenuAlt1 className='m-auto w-30' onClick={handleMenu}/>
        </div>
        <p
        onClick={handleDashboardClick}
        className='text-base mb-2 hover:cursor-pointer'>
            Dashboard
            </p>
        <p
        onClick={handleUSerlistClick}
        className='text-base hover:cursor-pointer'>
            User List
            </p>
    </div>
  )
}

export default Sidebar