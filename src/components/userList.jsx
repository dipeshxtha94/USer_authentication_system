import React from 'react'
import users from '../user'
import SearchScreen from '../screens/searchScreen'
import { useSelector } from 'react-redux'

const UserList = () => {

    const {searchValue}= useSelector((state)=> state.user)
    console.log(searchValue)

    const filteredUser= users.filter((val)=> val.role.toLowerCase()===searchValue.toLowerCase())
    console.log(filteredUser)
  return (
    <main
    className='w-3/4 md:w-4/5 xl:w-3/4flex flex-wrap flex-col'>
        <section 
        className='flex justify-center pt-5'>
           <SearchScreen />
        </section>
    <section
    className='md:w-30 mt-10 flex flex-wrap justify-center'>
        <table
        className='border border-black p-2'>
            <thead 
            className='border border-black text-xl font-semibold'>
                <tr
                className='border border-black h-fit w-fit'>
                <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    Name
                    </td>
                <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    Email
                    </td>
                <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    Role
                    </td>
                <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    Phone no
                    </td>
                </tr>
            </thead>
            <tbody>

                {filteredUser.length? 
                <>
                {filteredUser.map((val, id)=>{
                    return <tr key={id} className='h-fit w-fit'>
                     <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.name}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.email}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.role}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.phone}
                    </td>
                    </tr>
                })}</> : 
                <>
                {users.map((val, id)=>{
                    return <tr key={id}>
                     <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.name}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.email}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.role}
                    </td>
                    <td
                className='border border-black pl-10 pr-10 pt-3 pb-3'>
                    {val.phone}
                    </td>
                    </tr>
                })}</>}
            </tbody>
        </table>
    </section>
    </main>
  )
}

export default UserList