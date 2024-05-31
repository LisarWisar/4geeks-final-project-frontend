import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { toast } from 'react-toastify';
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
      return(resp.json())
    })

    .then(data =>{
      localStorage.setItem("jwt-token", data?.token)
      setAccountRole(data?.role)
      if (data?.role == "user"){
        toast.success('Success');
        navigate("/user")
      }
      else if (data?.role == "veterinarian"){
        toast.success('Success');
        navigate("/vet")
      }
      else{
        toast.error("Login Failed");
        console.log("There was an error")
        console.log("role: ", accountRole)
      }
    })
    .catch(error => {
      toast.error("Login Failed");
      console.error("There was an error", error);
    })
  }
  return(
    <div> 
      <Navbar />
      <div className="center">
        <div className="form-signin w-100 m-auto">
          <div>
            <div className="icon-user" >
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

     
