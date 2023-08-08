import React from 'react'
import { TbLogout2 } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import Toast from './toast'
const toast = new Toast()

const Logout = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    toast.Logout()
  }
  return (
    <div
      onClick={handleLogout}
      className='flex items-center align-middle pr-2 xl:pr-8 md:pr-5'>
      <p
        className='text-base pr-1 hover:cursor-pointer'>
        Logout
      </p>
      <TbLogout2
        className='mt-1 hover:cursor-pointer' />
    </div>
  )
}

export default Logout