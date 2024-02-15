import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export const VetFrontPage = () => {

    const navigate = useNavigate();
    const [appointmentsDict, setAppointmentsDict] = useState()
    const [appointmentsDataLength, setAppointmentsDataLength] = useState();
    const [appointmentsPreview, setAppointmentsPreview] = useState();
    const [clinicalRecordsPreview, setClinicalRecordsPreview] = useState();

    async function GetAppointments () {
        await fetch('http://localhost:5007/vet/calendar', {method: "GET",})
        .then (response => {
            return response.json();
        })
        .then(data => {
            setAppointmentsDict(data.data);
            setAppointmentsDataLength(data.data.length);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetAppointments()
      }, []);

    function AppointmentCards () {
        let appointments = []
        for (let i = 0; i<Math.min(appointmentsDataLength,4); i++){
            appointments.push(appointmentsDict[i])
        }
        console.log("data :", appointments)

        return(
            appointments.map(appointment => (
                <div>
                    <div className="container-fluid">
                        <div className="row py-3">
                            <div className="col-2 appointmentCardDate d-flex flex-column align-items-center py-1">
                                <p className="d-flex justify-content-center p-0 m-0">Thu 25</p>
                                <p className="d-flex justify-content-center p-0 m-0">{appointments.time}</p>
                            </div>
                            <div className="col-10 appointmentCardInfo py-2">
                                <div className="row">
                                    <div className="col-6 px-3 py-2">Veterinarian: {appointment.veterinarian}</div>
                                    <div className="col-6 px-3 py-2">Type of visit: {appointment.type_of_visit}</div>
                                    <div className="col-6 px-3 py-2">Species: {appointment.species} </div>
                                    <div className="col-6 px-3 py-2">Breed: {appointment.breed}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))
        )
    }

    /* return VIEW function */
    return(
    <div className="bg-white">
        <Navbar />
        <div className="vetBodyDiv">
            <div className="container-fluid">
                <div className="row pt-5 d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <button className="bodyTitleButton" onClick={() => {navigate("/vet/calendar")}}>
                            <div className="vetBodyTitleDesign">
                                <p>Appointments</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-8 vetPreviewCard my-4">
                        <p>Next appointments</p>
                        <AppointmentCards />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="bodyTitleButton" onClick={() => {navigate("/vet/clinical-records")}}>
                            <div className="vetBodyTitleDesign">
                                <p>Clinical records</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-8 vetPreviewCard my-4">
                        <div className="row">
                            <div className="col-3">Hola</div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-6">Name:</div>
                                    <div className="col-6">Species:</div>
                                    <div className="col-6">Date of birth:</div>
                                    <div className="col-6">Age:</div>
                                    <div className="col-6">Color:</div>
                                    <div className="col-6">Owner:</div>
                                    <div className="col-6">Sterilized</div>
                                    <div className="col-6">Weight:</div>
                                    <div className="col-6">Breed:</div>
                                    <div className="col-6">Allergies:</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}