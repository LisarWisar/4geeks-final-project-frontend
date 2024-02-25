import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./js/views/Home";
import { Login } from "./js/components/Login";
import { Register } from "./js/components/Register";
import { About } from "./js/components/About";
import { MissionAndVision } from "./js/components/MissionAndVision";
import { ContactUs } from "./js/components/ContactUs";
import { VetCalendarListed } from "./js/views/VetCalendarListed.js";
import { VetFrontPage } from "./js/views/VetFrontPage"; 
import { VetClinicalRecords } from "./js/views/VetClinicalRecords";
import { VetCreateAppointment } from "./js/views/VetCreateAppointment.js";
import { PatientsClinicalRecordS } from "./js/views/PatientsClinicalRecordS.js";
import { CalendarViewSpecific } from "./js/views/CalendarViewSpecific.js";
import { UserFrontPage } from "./js/views/UserFrontPage.js";
import injectContext from "./js/store/context.js";
import { UserPetListed } from "./js/views/UserPetListed.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vet" element={<VetFrontPage />} />
          <Route path="/vet/calendar" element={<VetCalendarListed />} />
          <Route path ="/vet/clinical-records" element={<VetClinicalRecords />} />
          <Route path ="/vet/calendar/create-appointment" element={<VetCreateAppointment />} />
          <Route path ="/user" element={<UserFrontPage />} />
          <Route path="/user/pets/:id" element={<UserPetListed/>} />
          <Route path="/about" element={<About />} />
          <Route path="/missionAndVision" element={<MissionAndVision/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/vet/clinical-records/:id" element={<PatientsClinicalRecordS/>} />
          <Route path="/vet/calendar-view" element={<CalendarViewSpecific/>} />
          
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default injectContext(App)