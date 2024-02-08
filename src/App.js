import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { vetFrontView } from "./views/VetFrontView";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/vet" element={<vetFrontView />} />
          
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}