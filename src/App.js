import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./js/views/Home";
import { Login } from "./js/components/Login";
import { Register } from "./js/components/Register";
import { About } from "./js/components/About";
import { MissionAndVission } from "./js/components/MissionAndVission";
import { AboutTeam } from "./js/components/AboutTeam";
import { ContactUs } from "./js/components/ContactUs";
import { VetCalendarListed } from "./js/views/VetCalendarListed";
import { VetFrontPage } from "./js/views/VetFrontPage";
import { VetClinicalRecords } from "./js/views/VetClinicalRecords";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vet" element={<VetFrontPage />} />
          <Route path="/vet/calendar" element={<VetCalendarListed />} />
          <Route path ="/vet/clinical-records" element={<VetClinicalRecords />} />
          <Route path="/about" element={<About />} />
          <Route path="/missionAndVission" element={<MissionAndVission/>} />
          <Route path="/aboutTeam" element={<AboutTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}