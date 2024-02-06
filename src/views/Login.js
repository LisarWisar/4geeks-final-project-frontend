import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    return(
        <div className="container justify-content-center">
            <label>Email</label>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <label>Password</label>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={ () => {
                let data = getData()
                console.log("data: ", data)
            }}>Login</button>
        </div>
    )
}

const getData = async () => {
    const response = await fetch('/');
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Handle the error returned by the HTTP request */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};