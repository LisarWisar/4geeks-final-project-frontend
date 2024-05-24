import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import "../../styles/UserFrontPage.css"

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
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetUserData()
      }, []);

    function PetCards () {
        let pets = []
        for (let i = 0; i<Math.min(petsDataLength,4); i++){
            pets.push(petsData[i])
        }

        return(
            pets.map(pet => (
                <div>
                    <div className="container-fluid">
                        <div className="py-3 d-flex">
                            <div className="appointmentCardDate">
                                    <div className="ratio ratio-1x1">
                                        <img src={pet?.image}></img>
                                    </div>
                            </div>
                            <div className="appointmentCardInfo py-2">
                                <div className="row">
                                    <div className="col-4 px-3 py-2">Name: {pet?.name}</div>
                                    <div className="col-4 px-3 py-2">Species: {pet?.species}</div>
                                    <div className="col-4 px-3 py-2">Age: {pet?.age} years old</div>
                                    <div className="col-12 px-3 py-2 d-flex justify-content-center">
                                        <button className="mx-5" onClick={() => {navigate(`/vet/clinical-records/${pet.pet_id}`)}}>See more..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }  

    function AppointmentCards () {
        let appointments = []
        for (let i = 0; i<Math.min(appointmentsDataLength,4); i++){
            appointments.push(appointmentsData[i])
        }

        return(
            appointments.map(appointment => (
                <div>
                    <div className="container-fluid">
                        <div className="py-3 d-lg-flex">
                            <div className="appointmentCardDate d-flex flex-column align-items-center py-1">
                                <p className="d-flex justify-content-center p-0 m-0">Thu 25</p>
                                <p className="d-flex justify-content-center p-0 m-0">{appointment?.time}</p>
                            </div>
                            <div className="appointmentCardInfo py-2">
                                <div className="row">
                                    <div className="col-6 px-3 py-2">Veterinarian: {appointment?.veterinarian}</div>
                                    <div className="col-6 px-3 py-2">Type of visit: {appointment?.type_of_visit}</div>
                                    <div className="col-6 px-3 py-2">Species: {appointment?.species} </div>
                                    <div className="col-6 px-3 py-2">Breed: {appointment?.breed}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))
        )
}


    return(
        <div>
            <Navbar/>
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row pt-5 d-flex justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                                <h3>Welcome {userData?.name}!</h3>
                        </div>
                        <div className="col-8 vetPreviewCard my-4 p-4">
                            <p>Your pets</p>
                            <PetCards />
                            <div className="d-flex justify-content-center">
                                <button onClick={() => {navigate("/user/pets")}}>See all Pets</button>
                            </div>
                        </div>
                        <div className="col-8 vetPreviewCard my-4 p-4">
                            <p>Next appointments</p>
                            <AppointmentCards />
                            <div className="d-flex justify-content-center">
                                <button onClick={() => {navigate("/user/calendar")}}>See full calendar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}