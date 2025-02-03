import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Footer } from './component/Footer'
import { About } from './pages/About'
import { Services } from './pages/Services'


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
