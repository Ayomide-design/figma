import React from 'react'
import './App.css'
import TopNav from './component/TopNav';
import Dashboard from './pages/Dashboard';
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import LoginPage from './component/LoginPage';


 function App(){
  return (
    <>
      {/* <div className='flex flex-col max-w-[100vw]'>
        <TopNav />
        <Dashboard />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={ <Dashboard />}/>
          <Route path='/login' element={ <LoginPage/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
 }
export default App
