import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export const UserFrontPage = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('jwt-token')
    const [petsData, setPetsData] = useState()
    const [petsDataLength, setPetsDataLength] = useState()
    const [appointmentsData, setAppointmentsData] = useState()
    const [appointmentsDataLength, setAppointmentsDataLength] = useState()
    const [userData, setUserData] = useState()

    async function GetUserData () {
        await fetch('http://localhost:5007/user', 
            {method: "GET", 
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token //authorization token
            }})
        .then (response => {
            return response.json()
        })
        .then(data => {
            setPetsData(data.pets_data)
            setPetsDataLength(data.pets_data.length)
            setAppointmentsData(data.appointments_data)
            setAppointmentsDataLength(data.appointments_data.length)
            setUserData(data.user_data)
            console.log("data: ",data.user_data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetUserData()
      }, []);

    return(
        <div>
            <Navbar/>
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row pt-5 d-flex justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                                <h3>Welcome {userData?.name}!</h3>
                        </div>
                        <div className="col-8 vetPreviewCard my-4">
                            <p>Your pets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}