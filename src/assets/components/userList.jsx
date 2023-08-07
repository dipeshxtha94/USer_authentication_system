import React from 'react'

const UserList = () => {
  return (
    <main
    className='mt-10'>
        <table
        className='border border-black p-2'>
            <thead 
            className='border border-black'>
                <tr
                className='border border-black'>
                <td
                className='border border-black p-2'>
                    Name
                    </td>
                <td
                className='border border-black p-2'>
                    Email
                    </td>
                <td
                className='border border-black p-2'>
                    Role
                    </td>
                <td
                className='border border-black p-2'>
                    Phone no
                    </td>
                </tr>
            </thead>
        </table>
    </main>
  )
}

export default UserList