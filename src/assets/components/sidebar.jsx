import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'

const Sidebar = () => {

    const handleMenu=()=>{
        
    }
  return (
    <div
    className='flex flex-col justify-center pl-3 pt-8'>
        <div
        className=''>
             <HiMenuAlt1 className='m-auto w-30' onClick={handleMenu}/>
        </div>
        <p
        className='text-base mb-2 hover:cursor-pointer'>
            Dashboard
            </p>
        <p
        className='text-base hover:cursor-pointer'>
            User List
            </p>
    </div>
  )
}

export default Sidebar