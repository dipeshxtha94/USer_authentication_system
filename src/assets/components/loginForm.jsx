import React from 'react'

const Login = () => {
    const handleSubmit=()=>{}
  return (
    <main
    className='flex flex-col justify-center items-center h-screen'>
        <h1
        className='text-4xl font-semibold mb-8 underline'>
            Login Form
            </h1>
        <form 
        onSubmit={handleSubmit}
        className='w-full flex flex-col justify-center'>
            <input
             type="text"
             className='border border-black rounded mb-2 text-center w-full'
             placeholder='Username'/>
            <input 
            type="text"
            className='border border-black rounded mb-3 text-center'
            placeholder='Password' /> 
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