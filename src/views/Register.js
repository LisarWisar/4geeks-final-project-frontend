import React from 'react'
import "../Register.css";


export const Register = () => {
  
    return (

<div className="center">
            <div className="form-signin m-auto">
                <div className="icon">

                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </div>
                <div>
                    <h1 className="Sign">Register</h1>
                    <div className="row">
                        <div className="col-6">
                            <label for="exampleInputEmail1" className="form-label">Full name</label>
                            <input type="email" className="form-control" placeholder="Enter your full name"/>
                        </div>
                        <div className="col-6">

                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter your email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label for="exampleInputEmail1" className="form-label">Password</label>
                            <input type="email" className="form-control" placeholder="Enter your password"/>
                        </div>
                        <div className="col-6">
                            <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
                            <input type="email" className="form-control" placeholder="Confirm your password"/>
                        </div>
                    </div>
                    <label for="exampleInputEmail1" className="form-label">Addres</label>
                    <input type="email" className="form-control" placeholder="Enter youR address"/>

                    <div className="row">
                        <div className="col-6">
                            <label for="exampleInputEmail1" className="form-label">Phone number</label>
                            <input type="email" className="form-control" placeholder="Enter your phone number"/>
                        </div>
                        <div className="col-6">
                            <label for="exampleInputEmail1" className="form-label">RUT</label>
                            <input type="email" className="form-control" placeholder="Enter your RUT"/>
                        </div>
                    </div>
                    <button className="w-50 py-1" type="submit">Access</button>
                    <div className="forgot">
                        <a>I forgot my password</a><br></br>
                        <a>Don't have ann account?</a>
                    </div>
                    </div>
        </div>
    </div>
  )
}
