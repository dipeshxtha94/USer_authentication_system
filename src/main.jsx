import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginForm.jsx'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './globalRedux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<App />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
