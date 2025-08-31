import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Components/Home'
import Projects from './Components/Projects'
import './App.css'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certifications from './Components/Certifications'
import Experiences from './Components/Experiences'
import InProgress from './Components/InProgress'
import Techs from './Components/Techs'
import About from './Components/About'

function App() {


  return (
   <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className='w-full md:w-4/6 mx-auto border-2 border-gray-200 rounded-lg shadow-lg p-6 mt-10 flex-1'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/in-progress" element={<InProgress/>} />
            <Route path="/techs" element={<Techs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    
  )
}

export default App
