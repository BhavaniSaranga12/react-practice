import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Dashboard } from './Components/Dashboard';
import "./App.css"
import { Home } from './Components/Home';
import { Signin } from './Components/Sign-in';




function App() {
  

  return (
   
    <BrowserRouter>
    <ul>
      <li><Link to="/" className='nav-link'>Home</Link></li>
      <li><Link to="/dashboard" className='nav-link'>Dashboard</Link></li>
      <li><Link to="/sign-in" className='nav-link'>Sign in</Link></li>
      </ul>
    <Routes>
    <Route path='/' element= {<Home/>}/>
      <Route path='/dashboard' element= {<Dashboard/>}/>
      <Route path='/sign-in' element= {<Signin/>}/>
    </Routes>
 
    </BrowserRouter>
    
   
  )
}

export default App
