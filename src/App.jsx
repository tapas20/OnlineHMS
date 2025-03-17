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
import Patient from "./Pages/Patient/Patient";
import BookAppointment from "./Pages/Dropdownmenu/BookAppointment";
import "./App.module.css"; // Make sure the CSS path is correct
import DoctorDashboard from "./Pages/DashboardPages/DoctorDashboard";
import PatientDashboard from "./Pages/DashboardPages/PatientDashboard";

import "./app.module.css";

import AI from "./Pages/Dropdownmenu/AI";
//Blood bank router
import BloodBankStore from "./Pages/Dropdownmenu/BloodBankPage/BloodBankStore";
import  Number from './Pages/Dropdownmenu/BloodBankPage/Number'
import Otp from "./Pages/Dropdownmenu/BloodBankPage/Otp";
import Bloodcheckup from "./Pages/Dropdownmenu/BloodBankPage/Bloodcheckup";
import Checkup from "./Pages/Dropdownmenu/BloodBankPage/Checkup";
import Receiveblood from "./Pages/Dropdownmenu/BloodBankPage/Receiveblood"
import Requestpage from "./Pages/Dropdownmenu/BloodBankPage/Requestpage"
import Historypage from "./Pages/Dropdownmenu/BloodBankPage/Historypage"


//EHR page
import ElectronicHealthRecord from "./Pages/Dropdownmenu/HealthRecordPage/ElectronicHealthRecord";
import AllRecord from "./Pages/Dropdownmenu/HealthRecordPage/AllRecord";




import ElectronicPrescriptionSystem from "./Pages/Dropdownmenu/ElectronicPrescriptionSystem";
import OnlineHomeServiceTreatment from "./Pages/Dropdownmenu/OnlineHomeServiceTreatment";
import OnlineMedicineDelivery from "./Pages/Dropdownmenu/OnlineMedicineDelivery";
import PracticeManagementPortalForDoctors from "./Pages/Dropdownmenu/PracticeManagementPortalForDoctors";
import Telemedicine from "./Pages/Dropdownmenu/Telemedicine";

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
        <Route path="/doctordash" element={<DoctorDashboard />} />
        <Route path="/patientdash" element={<PatientDashboard />} />
        <Route path="/patient" element={<Patient />} />

        {/* Services Routes */}
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/bloodbankstore" element={<BloodBankStore />} />
        <Route path="/number" element={<Number />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/bloodcheckup" element={<Bloodcheckup />} />
        <Route path="/checkup" element={<Checkup />} />
        <Route path="/receiveblood" element={<Receiveblood />} />
        <Route path="/requestpage" element={<Requestpage />} />
        <Route path="/historypage" element={<Historypage/>} />


 <Route path="/electronichealthrecord" element={<ElectronicHealthRecord />} />
 <Route path="/allrecord" element={<AllRecord />} />


        <Route path="/electronicprescriptionsystem" element={<ElectronicPrescriptionSystem />} />
        <Route path="/onlinehomeservicetreatment" element={<OnlineHomeServiceTreatment />} />
        <Route path="/onlinemedicinedelivery" element={<OnlineMedicineDelivery />} />
        <Route path="/practicemanagementportalfordoctors" element={<PracticeManagementPortalForDoctors />} />
        <Route path="/telemedicine" element={<Telemedicine />} />
        <Route path="/ai" element={<AI />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
