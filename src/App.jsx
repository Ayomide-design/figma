import React from 'react'
import './App.css'
import TopNav from './component/TopNav';
import Dashboard from './component/Dashboard';

 function App(){
  return (
    <>
      <div className='flex flex-col max-w-[100vw]'>
        <TopNav />
        <Dashboard />
      </div>
    </>
  )
 }
export default App
