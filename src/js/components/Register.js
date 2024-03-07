import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Navbar } from '../components/Navbar';
import "../../styles/Register.css";

export const Register = () => {
    const navigate = useNavigate();
    //Data of new user
    const [name, setName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [rut, setRut] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = { name, emailAddress, password, confirmPassword, address, phone, rut };
        // console.log(inputs);

        //URL API REGISTER 
        const url = "http://localhost:5007/register";
        //API PETITION
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs) // TO JSON
        };
        //PETITION 
        fetch(url, requestOptions)
            .then(response => {
                // VERIFYING RESPONSE
                if (response.ok) {
                    toast.success("Registered successfully");
                }

                //RESPONSE TO JSON
                return response.json();
            })
            .then(data => {
                toast.success("Registered successfully")
                console.log("Registered successfully", data);
                navigate("/login")
            })
            .catch(error => {
                //ERROR
                toast.error("Registration Failed");
                console.error(error)
            })

    }


    return (
        <div>
            <Navbar />
                <div className='form-register'>
                    <form className="center" onSubmit={handleSubmit} >
                        <h1 className="Register">Register</h1>
                        <div className="row">
                            <div className="col-6">
                                <label className="fullname">Full name<span className='errmsg'>*</span></label>
                                <input value={name} onChange={e => setName(e.target.value)} type="name" />
                            </div>
                            <div className="col-6">

                                <label className="email">Email address<span className='errmsg'>*</span></label>
                                <input value={emailAddress} onChange={e => setEmailAddress(e.target.value)} type="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Password<span className='errmsg'>*</span></label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Confirm Password<span className='errmsg'>*</span></label>
                                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" />
                            </div>
                        </div>
                        <div className='row'>
                            <label className="form-label">Address<span className='errmsg'>*</span></label>
                            <input value={address} onChange={e => setAddress(e.target.value)} type="text" />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Phone number<span className='errmsg'>*</span></label>
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">RUT<span className='errmsg'>*</span></label>
                                <input value={rut} onChange={e => setRut(e.target.value)} type="tel" />
                            </div>
                        </div>
                        <div className='access'>
                            <button className="access-b" type="submit">Access</button>
                        </div>
                        <div className="forgot">
                            <a>Already have ann account?</a><br></br>
                            <button onClick={() => {
                                navigate("/Login")
                            }}>Please Sing up </button>
                        </div>
                        </form>
                </div>
        </div>
            );
}
