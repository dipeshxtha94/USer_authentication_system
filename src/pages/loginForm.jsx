import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../globalRedux/slice'
import Toast from '../screens/toast'
import { useDispatch } from 'react-redux'
const toast = new Toast()

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.length === 0) {
      return toast.UsernameNullError()
    } else if (username.length < 6 || username.length > 15) {
      return toast.UsernameLengthError()
    }

    if (password.length === 0) {
      return toast.PasswordNullError()
    } else if (password.length < 6 || password.length > 15) {
      return toast.PasswordLengthError()
    }
    dispatch(setUser(username))
    navigate('/homepage')
    return toast.LoginSuccess()
  }
  return (
    <main
      className='flex flex-col justify-center items-center h-screen'>
      <h1
        className='text-4xl font-semibold mb-8 underline'>
        Login Form
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='flex flex-col justify-center'>
        <input
          type="text"
          className='border border-black rounded mb-2 text-center w-full'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <input
          type="text"
          className='border border-black rounded mb-3 text-center'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <input
          type="submit"
          className='border border-black rounded pr-1 pl-1
            hover:cursor-pointer bg-green-500 hover:bg-green-400'
          value='Login' />
      </form>
    </main>
  )
}

export default Login