import React from 'react'
import users from '../user'
import SearchScreen from '../screens/searchScreen'
import { useSelector } from 'react-redux'

const UserList = () => {

    const { searchValue } = useSelector((state) => state.user)

    const filteredUser = users.filter((val) => val.role.toLowerCase() === searchValue.toLowerCase())
    return (
        <main
            className='w-full flex flex-wrap flex-col pb-10'>
            <section
                className='flex justify-center pt-5'>
                <SearchScreen />
            </section>
            <section
                className='w-full mt-10 flex flex-wrap items-center
     justify-center text-sm md:text-base xl:text-xl'>
                <table
                    className='border border-black p-1 xl:p-2 md:p-0 border-collapse'>
                    <thead
                        className='border border-black text-sm
             md:text-base xl:text-xl font-semibold'>
                        <tr
                            className='border border-black h-fit w-fit'>
                            <td
                                className='border border-black
                 xl:pl-10 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3 pl-0 pr-0 pt-0 pb-0'>
                                Name
                            </td>
                            <td
                                className='border border-black
                 xl:pl-10 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                Email
                            </td>
                            <td
                                className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                Role
                            </td>
                            <td
                                className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                Phone no
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredUser.length ?
                            <>
                                {filteredUser.map((val, id) => {
                                    return <tr key={id} className='h-fit w-fit'>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.name}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.email}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.role}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.phone}
                                        </td>
                                    </tr>
                                })}</> :
                            <>
                                {users.map((val, id) => {
                                    return <tr key={id}>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.name}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.email}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
                                            {val.role}
                                        </td>
                                        <td
                                            className='border border-black xl:pl-10
                 xl:pr-10 xl:pt-3 xl:pb-3
                md:pl-8 md:pr-8 md:pt-3 md:pb-3
                 pl-0 pr-0 pt-0 pb-0'>
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