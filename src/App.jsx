import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";

import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginPatient from "./Pages/Authentcation/Patient_Login/LoginPatient";
import SignupPatient from "./Pages/Authentcation/Patient_Signup/SignupPatient";
import Patient from "./Pages/Patient/Patient";
import BookAppointment from "./Pages/Dropdownmenu/BookAppointment";
import PatientDashboard from "./Pages/DashboardPages/PatientDashboard";
import AI from "./Pages/Dropdownmenu/AI";

// Blood bank
import BloodHomeScreen from "./Pages/Dropdownmenu/BloodBankPage/BloodHomeScreen";
import ForecastDashboard from "./Pages/Dropdownmenu/BloodBankPage/ForecastDashboard";
import BlockchainLogViewer from "./Pages/Dropdownmenu/BloodBankPage/BlockchainLogViewer";

// EHR
import ElectronicHealthRecord from "./Pages/Dropdownmenu/HealthRecordPage/ElectronicHealthRecord";
import AllRecord from "./Pages/Dropdownmenu/HealthRecordPage/AllRecord";
import Reportpage from "./Pages/Dropdownmenu/HealthRecordPage/Reportpage";

import ElectronicPrescriptionSystem from "./Pages/Dropdownmenu/ElectronicPrescriptionSystem";
import OnlineHomeServiceTreatment from "./Pages/Dropdownmenu/OnlineHomeServiceTreatment";
import OnlineMedicineDelivery from "./Pages/Dropdownmenu/OnlineMedicineDelivery";
import PracticeManagementPortalForDoctors from "./Pages/Dropdownmenu/PracticeManagementPortalForDoctors";
import Telemedicine from "./Pages/Dropdownmenu/TeleMedicine/Telemedicine";
import TeleConfirmationPage from "./Pages/Dropdownmenu/TeleMedicine/TeleConfirmationPage";
import DeliverySuccess from "./Pages/Landing/DeliverySuccess";

// Ambulance
import AmbulanceServiceWalkthrough from "./Pages/Dropdownmenu/ambulance/Walkthrough";
import AmbulanceServiceScreen from "./Pages/Dropdownmenu/ambulance/Screen";
import AmbulanceServiceLoginScreen from "./Pages/Dropdownmenu/ambulance/LoginScreen";
import AmbulanceServiceForgotPassword from "./Pages/Dropdownmenu/ambulance/ForgotPassword";
import AmbulanceServiceAunthenticationScreen from "./Pages/Dropdownmenu/ambulance/AunthenticationScreen";
import AmbulanceServiceSignupScreen from "./Pages/Dropdownmenu/ambulance/Signupscreen";
import AmbulanceServiceResetPassword from "./Pages/Dropdownmenu/ambulance/ResetPassword";
import AmbulanceServiceSetPassword from "./Pages/Dropdownmenu/ambulance/SetPassword";
import AmbulanceServiceAmbulancePage from "./Pages/Dropdownmenu/ambulance/AmbulancePage";
import AmbulanceServicePickup from "./Pages/Dropdownmenu/ambulance/Pickup";
import AmbulanceServiceDestination from "./Pages/Dropdownmenu/ambulance/Destination";
import AmbulanceServiceAmbulancetype from "./Pages/Dropdownmenu/ambulance/Ambulancetype";
import AmbulanceServicePayment from "./Pages/Dropdownmenu/ambulance/Payment";

// Caretaker
import CaretakerHomepage from "./Pages/Dropdownmenu/caretaker/CaretakerHomepage";
import CaretakerBookingPage from "./Pages/Dropdownmenu/caretaker/CaretakerBookingPage";
import CaretakerConfirmation from "./Pages/Dropdownmenu/caretaker/CaretakerConfirmation";

// Diagnosis
import DiagnosisHomepage from "./Pages/Dropdownmenu/diagnosis/DiagnosisHomepage";


import DiagnosisBooking from "./Pages/Dropdownmenu/diagnosis/DiagnosisBooking";


// Nursing service (uncommented and imported properly)
import NursingServiceHome from "./Pages/Dropdownmenu/nursing/Home";
import Booking from "./Pages/Dropdownmenu/Nursing/Booking";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Body />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="loginpatient" element={<LoginPatient />} />
          <Route path="signuppatient" element={<SignupPatient />} />
          <Route path="delivery-success" element={<DeliverySuccess />} />

          {/* Protected Patient Routes */}
          <Route path="patient" element={<Patient />} />
          <Route path="patientdash" element={<PatientDashboard />} />
          <Route path="bookappointment" element={<BookAppointment />} />
          <Route path="bloodhomescreen" element={<BloodHomeScreen />} />
          <Route path="forecastdashboard" element={<ForecastDashboard />} />
          <Route path="blockchain" element={<BlockchainLogViewer />} />
          <Route
            path="electronichealthrecord"
            element={<ElectronicHealthRecord />}
          />
          <Route path="allrecord" element={<AllRecord />} />
          <Route path="reportpage" element={<Reportpage />} />
          <Route
            path="electronicprescriptionsystem"
            element={<ElectronicPrescriptionSystem />}
          />
          <Route
            path="onlinehomeservicetreatment"
            element={<OnlineHomeServiceTreatment />}
          />
          <Route
            path="onlinemedicinedelivery"
            element={<OnlineMedicineDelivery />}
          />
          <Route path="telemedicine" element={<Telemedicine />} />
          <Route path="confirmation" element={<TeleConfirmationPage />} />

          <Route path="ai" element={<AI />} />

          {/* Ambulance Routes */}
          <Route path="walkthrough" element={<AmbulanceServiceWalkthrough />} />
          <Route path="screen" element={<AmbulanceServiceScreen />} />
          <Route path="loginscreen" element={<AmbulanceServiceLoginScreen />} />
          <Route
            path="forgotpassword"
            element={<AmbulanceServiceForgotPassword />}
          />
          <Route
            path="aunthenticationscreen"
            element={<AmbulanceServiceAunthenticationScreen />}
          />
          <Route
            path="signupscreen"
            element={<AmbulanceServiceSignupScreen />}
          />
          <Route
            path="resetpassword"
            element={<AmbulanceServiceResetPassword />}
          />
          <Route path="setpassword" element={<AmbulanceServiceSetPassword />} />
          <Route
            path="ambulancepage"
            element={<AmbulanceServiceAmbulancePage />}
          />
          <Route path="pickup" element={<AmbulanceServicePickup />} />
          <Route path="destination" element={<AmbulanceServiceDestination />} />
          <Route
            path="ambulancetype"
            element={<AmbulanceServiceAmbulancetype />}
          />
          <Route path="payment" element={<AmbulanceServicePayment />} />
          {/* Caretaker */}
          <Route path="caretakerhomepage" element={<CaretakerHomepage />} />
          <Route
            path="caretakerbookingpage"
            element={<CaretakerBookingPage />}
          />
          <Route
            path="caretakerconfirmation"
            element={<CaretakerConfirmation />}
          />

          {/* Diagnosis */}
          <Route path="diagnosishomepage" element={<DiagnosisHomepage />} />
         
         
          <Route
            path="diagnosisbooking"
            element={<DiagnosisBooking  />}
          />
        
          <Route path="practicemanagementportalfordoctors" element={<Body />} />s
          {/* Nursing Service Routes */}
          <Route path="NursingServiceHome" element={<NursingServiceHome/>}/>
          <Route path="Booking" element={<Booking/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
