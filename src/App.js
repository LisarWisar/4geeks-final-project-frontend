import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./js/views/Home";
import { Login } from "./js/components/Login";
import { Register } from "./js/components/Register";
import { About } from "./js/components/About";
import { MissionAndVission } from "./js/components/MissionAndVission";
import { AboutTeam } from "./js/components/AboutTeam";
import { ContactUs } from "./js/components/ContactUs";
import { vetFrontView } from "./js/views/VetFrontView";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/missionAndVission" element={<MissionAndVission/>} />
          <Route path="/aboutTeam" element={<AboutTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/vet" element={<vetFrontView />} />
          
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}