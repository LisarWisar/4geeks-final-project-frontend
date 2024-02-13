import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate()
    return(
        <div className="container">
            <button onClick={() => {navigate("/login")}}>Go to login</button>
        </div>
    )
}
