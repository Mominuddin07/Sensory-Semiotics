import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import TextToSign from './Pages/TextToSign';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/Footer';
import Hero from './Components/sections/hero/hero';
import Learn from './Pages/Learn';


function App() {
  return(
    <Router>
      <div className="min-h-screen bg-[#1A1A2E]">
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/text-to-sign' element={<TextToSign />} />
          <Route path="/learn" element={<Learn />} />

          <Route exact path='*' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;