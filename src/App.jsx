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
<<<<<<< HEAD
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import "./App.module.css"; // Make sure the CSS path is correct
import DoctorDashboard from "./Pages/DashboardPages/DoctorDashboard";
import PatientDashboard from "./Pages/DashboardPages/PatientDashboard";
=======
import BookAppointment from "./Pages/BookAppointment/BookAppointment"

import './app.module.css'

import OnlineAppointment from "./Pages/Dropdownmenu/OnlineAppointment";
import AI from "./Pages/Dropdownmenu/AI"

>>>>>>> f05285d56d577ebcd7171045fd6d2252a27fcab9

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
<<<<<<< HEAD
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/doctordash" element={<DoctorDashboard />} />
        <Route path="/patientdash" element={<PatientDashboard />} />
=======
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path="/onlineappointment" element={<OnlineAppointment/>}/>
        <Route path="/ai" element={<AI/>}/>


>>>>>>> f05285d56d577ebcd7171045fd6d2252a27fcab9
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
