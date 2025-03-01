import './App.module.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Header from './Components/Header/Header'
import Footer from  './Components/Footer/Footer'
import About from   './Pages/About/About'
import Contact from './Pages/Contact/Contact'


// import LoginDoctor from "./Components/LoginDoctor"
// import LoginPatient from "./Components/LoginPatient"
// import SignupDoctor from "./Components/SignupDoctor"
// import SignupPatient from "./Components/SignupPatient"



function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {/* <Route path="/logindoctor" element={<LoginDoctor />} />
            <Route path="/loginpatient" element={<LoginPatient />} />
            <Route path="/signupdoctor" element={<SignupDoctor />} />
            <Route path="/signuppatient" element={<SignupPatient />} /> */}
            
          
    
              
        
            
         
        </Routes>
        <Footer/>
   
      </BrowserRouter>

    </>
  )
}

export default App
