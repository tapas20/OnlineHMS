import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import { Web3Provider } from "./context/Web3Context";
import BlockchainAuthMiddleware from "./Middleware/BlockchainAuthMiddleware";

import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginDoctor from "./Pages/Authentcation/Doctor_Login/LoginDoctor";
import LoginPatient from "./Pages/Authentcation/Patient_Login/LoginPatient";
import SignupDoctor from "./Pages/Authentcation/Doctor_Signup/SignupDoctor";
import SignupPatient from "./Pages/Authentcation/Patient_Signup/SignupPatient";
import Patient from "./Pages/Patient/Patient";
import BookAppointment from "./Pages/Dropdownmenu/BookAppointment";
import DoctorDashboard from "./Pages/DashboardPages/DoctorDashboard";
import PatientDashboard from "./Pages/DashboardPages/PatientDashboard";

import AI from "./Pages/Dropdownmenu/AI";

//Blood bank router
import BloodBankStore from "./Pages/Dropdownmenu/BloodBankPage/BloodBankStore";
import Number from "./Pages/Dropdownmenu/BloodBankPage/Number";
import Otp from "./Pages/Dropdownmenu/BloodBankPage/Otp";
import Bloodcheckup from "./Pages/Dropdownmenu/BloodBankPage/Bloodcheckup";
import Checkup from "./Pages/Dropdownmenu/BloodBankPage/Checkup";
import Receiveblood from "./Pages/Dropdownmenu/BloodBankPage/Receiveblood";
import Requestpage from "./Pages/Dropdownmenu/BloodBankPage/Requestpage";
import Historypage from "./Pages/Dropdownmenu/BloodBankPage/Historypage";
import TrackingBlood from "./Pages/Dropdownmenu/BloodBankPage/TrackingBlood";

//EHR page
import ElectronicHealthRecord from "./Pages/Dropdownmenu/HealthRecordPage/ElectronicHealthRecord";
import AllRecord from "./Pages/Dropdownmenu/HealthRecordPage/AllRecord";
import Reportpage from "./Pages/Dropdownmenu/HealthRecordPage/Reportpage";

import ElectronicPrescriptionSystem from "./Pages/Dropdownmenu/ElectronicPrescriptionSystem";
import OnlineHomeServiceTreatment from "./Pages/Dropdownmenu/OnlineHomeServiceTreatment";
import OnlineMedicineDelivery from "./Pages/Dropdownmenu/OnlineMedicineDelivery";
import PracticeManagementPortalForDoctors from "./Pages/Dropdownmenu/PracticeManagementPortalForDoctors";
import Telemedicine from "./Pages/Dropdownmenu/Telemedicine";
import DeliverySuccess from "./Pages/Landing/DeliverySuccess";

function App() {
  return (
    <Web3Provider>
      <BrowserRouter basename="/">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Body />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="logindoctor" element={<LoginDoctor />} />
            <Route path="loginpatient" element={<LoginPatient />} />
            <Route path="signupdoctor" element={<SignupDoctor />} />
            <Route path="signuppatient" element={<SignupPatient />} />
            <Route path="delivery-success" element={<DeliverySuccess />} />
          </Route>

          {/* Protected Patient Routes */}
          <Route
            path="/"
            element={
              <BlockchainAuthMiddleware>
                <Body />
              </BlockchainAuthMiddleware>
            }
          >
            <Route path="patient" element={<Patient />} />
            <Route path="patientdash" element={<PatientDashboard />} />

            {/* Protected Services */}
            <Route path="bookappointment" element={<BookAppointment />} />
            <Route path="bloodbankstore" element={<BloodBankStore />} />
            <Route path="number" element={<Number />} />
            <Route path="otp" element={<Otp />} />
            <Route path="bloodcheckup" element={<Bloodcheckup />} />
            <Route path="checkup" element={<Checkup />} />
            <Route path="receiveblood" element={<Receiveblood />} />
            <Route path="requestpage" element={<Requestpage />} />
            <Route path="historypage" element={<Historypage />} />
            <Route path="trackingblood" element={<TrackingBlood />} />
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
            <Route path="ai" element={<AI />} />
          </Route>

          {/* Protected Doctor Routes */}
          <Route
            path="/"
            element={
              <BlockchainAuthMiddleware>
                <Body />
              </BlockchainAuthMiddleware>
            }
          >
            <Route path="doctordash" element={<DoctorDashboard />} />
            <Route
              path="practicemanagementportalfordoctors"
              element={<PracticeManagementPortalForDoctors />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  );
}

export default App;
