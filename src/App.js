import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { VetCalendarListed } from "./views/VetCalendarListed";
import { VetFrontPage } from "./views/VetFrontPage";
import { VetClinicalRecords } from "./views/VetClinicalRecords";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vet" element={<VetFrontPage />} />
          <Route path="/vet/calendar" element={<VetCalendarListed />} />
          <Route path ="/vet/clinical-records" element={<VetClinicalRecords />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}