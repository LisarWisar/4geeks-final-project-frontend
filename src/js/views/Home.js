//import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar.js";
import BottomNavbar from "../components/BottomNavbar.js";
import { HeroSection } from "../components/HeroSection.js";
import About from "../components/About.js";
import MissionAndVision from "../components/MissionAndVision.js";
import ContactUs from "../components/ContactUs.js";
import OurClients from "../components/OurClients.js";


export const Home = () => {
   // const navigate = useNavigate()
    return(
        <>
        <TopNavbar />
        <HeroSection/>
        <About/>
        <MissionAndVision/>
        <OurClients/>
        <ContactUs/>
        <BottomNavbar />
        </>

    )
}

export default Home;