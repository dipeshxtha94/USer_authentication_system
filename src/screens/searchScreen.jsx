import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../globalRedux/slice'

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const dispatch= useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setSearchValue(search))
    }

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        dispatch(setSearchValue(''))
    }, [search===''])

  return (
   <main>
    <form 
    className='flex'
    onSubmit={(e)=>handleSubmit(e)}>
        <input
         type="text"
          placeholder='Search users by their role!'
          className='border border-black rounded w-64 text-center mr-2'
          onChange={(e)=>handleChange(e)}
          value={search}/>
          <input 
          type="submit"
          className='pr-1 pl-1 border border-black rounded 
          bg-green-400 hover:cursor-pointer hover:bg-green-400'
          value='Search' />
    </form>
   </main>
  )
}

export default SearchScreen