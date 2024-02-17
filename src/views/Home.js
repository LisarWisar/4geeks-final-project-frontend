import { useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar.js";
import BottomNavbar from "./BottomNavbar.js";
import HeroSection from "./HeroSection.js";


export const Home = () => {
    const navigate = useNavigate()
    return(
        <>
        <TopNavbar />
        <HeroSection/>
        <BottomNavbar />
        </>
    )
}
export default Home;

