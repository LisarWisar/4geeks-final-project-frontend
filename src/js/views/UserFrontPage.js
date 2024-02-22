import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export const UserFrontPage = () => {

    const navigate = useNavigate()
    const [petsData, setPetsData] = useState()
    const [petsDataLength, setPetsDataLength] = useState()
    const [appointmentsData, setAppointmentsData] = useState()
    const [appointmentsDataLength, setAppointmentsDataLength] = useState()

    async function GetUserData () {
        await fetch('http://localhost:5007/user', {method: "GET",})
        .then (response => {
            return response.json()
        })
        .then(data => {
            /*setPetsData(data.pets)
            setPetsDataLength(data.pets.length)
            setAppointmentsData(data.appointments)
            setAppointmentsDataLength(data.appointments.length)*/
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
                                <h3>Welcome INSERT USERNAME!</h3>
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