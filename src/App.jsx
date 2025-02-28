import './App.module.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Header from './Components/Header/Header'
import Footer from  './Components/Footer/Footer'
import About from   './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Authentcation/Login/Login'
import AdminLogin from './Pages/Authentcation/Admin_Login/Admin_Login'
import DoctorLogin from './Pages/Authentcation/Doctor_Login/Doctor_Login'
import PatientLogin from './Pages/Authentcation/Patient_Login/Patient_Login'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Login"  >
              <Route path="admin" element={<AdminLogin />} />
              <Route path="doctor" element={<DoctorLogin />} />
              <Route path="patient" element={<PatientLogin />} />
          </Route>
            
          </Route>
        </Routes>
        <Footer/>
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </BrowserRouter>

    </>
  )
}

export default App
