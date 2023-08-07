import Sidebar from './assets/components/sidebar'
import Dashboard from './assets/components/dashboard'
import Login from './assets/components/loginForm'
import UserList from './assets/components/userList'

function App() {
  return (
    <main 
    className='flex justify-center'>
      <div
      className='w-1/3 xl:w-1/6 md:w-1/4 bg-slate-300'>
        <Sidebar />
      </div>
     <div
     className='w-full  bg-slate-200'>
      <Dashboard />
     </div>
     {/* <Login /> */}
     {/* < UserList /> */}
    </main>
  )
}

export default App
