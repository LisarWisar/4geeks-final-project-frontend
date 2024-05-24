import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { PatientsClinicalRecordSpecific } from "./js/views/PatientsClinicalRecordSpecific.js";
import { CalendarViewSpecific } from "./js/views/CalendarViewSpecific.js";
import { UserFrontPage } from "./js/views/UserFrontPage.js";
import { PrivateRoutes } from "./js/utils/PrivateRoutes.js";
import injectContext from "./js/store/context.js";
import { UserPetListed } from "./js/views/UserPetListed.js";
import { CreatePet } from "./js/views/CreatePet.js";
import { UserCalendarListed } from "./js/views/UserCalendar.js";


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/missionAndVision" element={<MissionAndVision/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/vet/patiens" element={<PatientsClinicalRecordSpecific/>} />
            <Route path="/vet/calendar-view" element={<CalendarViewSpecific/>} />
            <Route path="/vet" element={<VetFrontPage />} />
            <Route path="/vet/calendar" element={<VetCalendarListed />} />
            <Route path ="/vet/clinical-records" element={<VetClinicalRecords />} />
            <Route path="/vet/clinical-records/:id" element={<PatientsClinicalRecordSpecific/>} />
            <Route path ="/vet/calendar/create-appointment" element={<VetCreateAppointment />} />
            <Route path ="/user" element={<UserFrontPage />} />
            <Route path="/user/pets/" element={<UserPetListed/>} />
            <Route path="/user/pets/add-new-pet" element={<CreatePet/>} />
            <Route path ="/user/calendar" element={<UserCalendarListed />} />
          </Route>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default injectContext(App)