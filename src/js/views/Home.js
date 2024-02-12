import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar.js";
import BottomNavbar from "../components/BottomNavbar.js";
import HeroSection from "../components/HeroSection.js";
import About from "../components/About.js";
import AboutTeam from "../components/AboutTeam.js";
import MissionAndVission from "../components/MissionAndVission.js";
import ContactUs from "../components/ContactUs.js";


export const Home = () => {
    const navigate = useNavigate()
    return(
        <>
        <TopNavbar />
        <HeroSection/>
        <About/>
        <MissionAndVission/>
        <ContactUs/>
        <AboutTeam/>
        <BottomNavbar />
        </>

    )
}


export default Home;