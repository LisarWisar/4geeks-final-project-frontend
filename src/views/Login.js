import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../log-in.css";


export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    return(
<div className="center">
    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
      <li>
        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
          aria-pressed="false">
        </button>
      </li>
      <li>
        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark"
          aria-pressed="false">
        </button>
      </li>
      <li>
        <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto"
          aria-pressed="true">
        </button>
      </li>
    </ul>
    <main className="form-signin w-100 m-auto">
    <form>
    
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
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
        <button className="w-100 py-2" type="submit"  onClick={() => {navigate("/vet")
        }}>Access </button>
        <div className="forgot">
        <a>I forgot my password</a><br></br>
        <a>Don't have an account?</a><br></br>
        <button type="submit"  onClick={() => {navigate("/Register")
        }}>Create account</button>
      </div>
      </div>
    </form>
    </main>
    </div>
    )
}

     