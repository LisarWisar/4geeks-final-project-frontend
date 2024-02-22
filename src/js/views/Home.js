//import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar.js";
import BottomNavbar from "../components/BottomNavbar.js";
import HeroSection from "../components/HeroSection.js";
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
       {/* Images of our clients 3 */}
<div className="container">
 <div className="row">
    <div className="col">
        <OurClients
        image='1'/>
        </div>
         <div className="col">
        <OurClients
        image='2'/>
        </div>
        <div className="col">
        <OurClients
        image='3'/>
        </div>
        {/* Images of our clients other 3 */}
{/*         <div classNameName="container"> */}
       <div className="row">
       <div className="col">
        <OurClients
        image='4'/>
        </div>
        <div className="col">
        <OurClients
        image='5'/>
        </div>
         <div className="col">
        <OurClients
        image='6'/>
        </div>
        </div>
        </div>
        </div>
{/*         </div> */}
        <ContactUs/>
        <BottomNavbar />
        </>

    )
}

export default Home;