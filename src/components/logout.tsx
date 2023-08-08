import React from 'react'
import {  TbLogout2} from 'react-icons/tb'

const Logout = () => {
  return (
    <div
    className='flex items-center align-middle pr-8'>
        <p
        className='text-base pr-1'>
            Logout
            </p>
        <TbLogout2  className='mt-1'/>
    </div>
  )
}

export default Logout