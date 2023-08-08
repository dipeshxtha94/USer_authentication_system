import Sidebar from './screens/sidebar'
import Dashboard from './pages/dashboard'
import UserList from './pages/userList'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMenu } from 'react-icons/ai'
import { setMenuFlag } from './globalRedux/slice'

function App() {

  const dispatch = useDispatch()
  const { homePageFlag } = useSelector((state) => state.user)
  const { menuFlag } = useSelector((state) => state.user)

  const handleMenuClick = () => {
    dispatch(setMenuFlag(true))
  }
  return (
    <main
      className='w-full flex justify-center mt-20'>
      {menuFlag
        &&
        <div
          className='w-1/5 xl:w-1/5 md:w-1/5 bg-slate-300'>
          <Sidebar />
        </div>}

      <div
        className='w-4/5 md:w-4/5 xl:w-4/5  bg-slate-200'>
        {!menuFlag
          &&
          <div
            className='pt-5 pl-3'>
            <AiOutlineMenu
              className='text-base md:text-xl xl:text-3xl hover:cursor-pointer'
              onClick={handleMenuClick} />
          </div>}
        {homePageFlag === 'dashboard'
          &&
          <Dashboard />}
        {homePageFlag === 'userlist'
          &&
          <UserList />}
      </div>
    </main>
  )
}

export default App
