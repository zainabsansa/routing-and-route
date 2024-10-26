import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
        <Route path='/contact' element= {<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App