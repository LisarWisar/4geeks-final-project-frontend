import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import "../../styles/log-in.css";


export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [accountRole, setAccountRole] = useState();
    const navigate = useNavigate()
  
    const handleClick = async () => {
      console.log(email, password)
      const login = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": email,
          "password": password

        })
      }
         await fetch('http://localhost:5007/login', login)
      .then(resp =>{
/*         console.log(resp)
        if(resp.status === 200) return resp.json();
        else alert("There has been some error"); */
        return(resp.json())
      })

      .then(data =>{
        setAccountRole(data?.role)
      })
      .catch(error => {
        console.error("There was an error", error);
      })

      if (accountRole == "user"){
        navigate("/user")
      }
      else if (accountRole == "veterinarian"){
        navigate("/vet")
      }
      else{
        console.log("There was an error")
      }
    }
    return(
<div> <Navbar />
<div className="center">
    <div className="form-signin w-100 m-auto">
    <div>
      <div className="icon-log" >
        <FontAwesomeIcon icon={faUser}/>
      </div>
      <h1 className="Sign">Login</h1>
      <div className="form-floating">
        <input type="email" className="form-control" placeholder="User name"  onChange={(e) => setEmail(e.target.value)}></input>
        <label>User name</label>
      </div><br></br>
      <div className="form-floating">
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        <label>Password</label>
      </div>
      <div className="button-login">
      <button className="w-100 py-2" type="submit"  onClick= {() => handleClick()}>Access </button>
        <div className="forgot">
        <a>I forgot my password</a><br></br>
        <a>Don't have an account?</a><br></br>
        <button type="submit"  onClick={() => {navigate("/Register")
        }}>Create account</button>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    )
}

     
