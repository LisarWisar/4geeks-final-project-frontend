import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate()
    return(
        <div className="container">
            <button onClick={async () => {
                console.log(await getData())
                /*navigate("/login")*/
            }}>Go to login</button>
        </div>
    )
}

const getData = async () => {
    const response = await fetch('http://localhost:5007');
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Handle the error returned by the HTTP request */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};