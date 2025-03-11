import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginDoctor from "./Pages/Authentcation/Doctor_Login/LoginDoctor";
import LoginPatient from "./Pages/Authentcation/Patient_Login/LoginPatient";
import SignupDoctor from "./Pages/Authentcation/Doctor_Signup/SignupDoctor";
import SignupPatient from "./Pages/Authentcation/Patient_Signup/SignupPatient";
import Appointment from "./Pages/Appointment/Appointment";
import BookAppointment from "./Pages/BookAppointment/BookAppointment"


import OnlineAppointment from "./Pages/Dropdownmenu/OnlineAppointment";
import AI from "./Pages/Dropdownmenu/AI"


import "./App.module.css"; // Make sure the CSS path is correct

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logindoctor" element={<LoginDoctor />} />
        <Route path="/loginpatient" element={<LoginPatient />} />
        <Route path="/signupdoctor" element={<SignupDoctor />} />
        <Route path="/signuppatient" element={<SignupPatient />} />
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path="/onlineappointment" element={<OnlineAppointment/>}/>
        <Route path="/ai" element={<AI/>}/>


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
