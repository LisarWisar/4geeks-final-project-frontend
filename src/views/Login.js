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
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={ async () => {
                let response = await Validate_user({"email": email, "password": password})
                console.log("respuesta: ", response)
                /*if (response.ok)
                /*    navigate("/vet")
                /*else
                /*    console.log("Invalid user or password")*/
            }}>Login</button>
        </div>
    )
}

async function Validate_user (credentials) {
    await fetch('http://localhost:5007/login', {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: new Headers({
          "Content-Type": "application/json"
        })
    })
    .then (response => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text);
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

};