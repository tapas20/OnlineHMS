import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import LoginDoctor from './Pages/Authentcation/Doctor_Login/LoginDoctor'
import LoginPatient from "./Pages/Authentcation/Patient_Login/LoginPatient"
import SignupDoctor from "./Pages/Authentcation/Doctor_Signup/SignupDoctor"
import SignupPatient from "./Pages/Authentcation/Patient_Signup/SignupPatient"



import './App.module.css' // Make sure the CSS path is correct

function App() {

  return (
   <><Router>
      <Header />
      
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       <Route path='/logindoctor' element={<LoginDoctor />} />
       <Route path='/loginpatient' element={<LoginPatient />} />
       <Route path='/signupdoctor' element={<SignupDoctor />} />
       <Route path='/signuppatient' element={<SignupPatient />} />
     </Routes>
    
      <Footer /> </Router>
    </>
  )
}

export default App
