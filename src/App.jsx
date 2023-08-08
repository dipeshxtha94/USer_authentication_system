import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import Login from './components/loginForm'
import UserList from './components/userList'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {

  const { homePageFlag }= useSelector((state)=> state.user)
  console.log(homePageFlag)
  
  return (
    <main 
    className='w-full flex justify-center'>
      <div
      className='w-1/4 xl:w-1/4 md:w-1/5 bg-slate-300'>
        <Sidebar />
      </div>
     <div
     className='w-3/4 md:w-4/5 xl:w-3/4  bg-slate-200'>
      {homePageFlag==='dashboard' && <Dashboard />}
      {homePageFlag==='userlist' && <UserList />}
     </div>
    </main>
  )
}

export default App
