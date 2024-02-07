import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export const Home = () => {
    const navigate = useNavigate()
    return(
        <>
        <Navbar />
        <div className="container">
            
            <button onClick={() => {
                navigate("/login")
            }}>Go to login</button>


        </div>



        <Footer />
        </>
    )
}


export default Home;