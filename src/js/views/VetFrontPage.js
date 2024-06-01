import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import styles from "../../styles/VetFrontPage.module.css";

export const VetFrontPage = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('jwt-token');
    const [appointmentsDict, setAppointmentsDict] = useState()
    const [appointmentsDataLength, setAppointmentsDataLength] = useState();
    const [clinicalRecordsDict, setClinicalRecordsDict] = useState();

    async function GetAppointments () {
        await fetch('http://localhost:5007/vet/calendar', 
        {method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token //authorization token
        }})
        .then (response => {
            return response.json();
        })
        .then(data => {
            setAppointmentsDict(data.appointments_data);
            setAppointmentsDataLength(data.appointments_data.length);
        })
        .catch(error => {
            console.log(error);
        })
    }

    async function GetPetInfo () {
        await fetch('http://localhost:5007/vet/clinical-record-preview', 
        {method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token //authorization token
        }})
        .then (response => {
            return response.json();
        })
        .then(data => {
            setClinicalRecordsDict(data.data)
            console.log("data: ", clinicalRecordsDict)
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    useEffect(() => {
        GetAppointments()
        GetPetInfo()
      }, []);

    function AppointmentCards () {
        let appointments = []
        for (let i = 0; i<Math.min(appointmentsDataLength,4); i++){
            appointments.push(appointmentsDict[i])
        }

        return(
            appointments.map(appointment => (
                <div>
                    <div className="container-fluid">
                        <div className="py-3 d-flex justify-content-center row">
                            <div className={`${styles.appointmentCardDate} col-10 col-lg-2 d-flex flex-column align-items-center py- py-lg-5`}>
                                <p className="d-flex justify-content-center p-0 m-0">{appointment.weekday_abbreviated} {appointment.date_day}</p>
                                <p className="d-flex justify-content-center p-0 m-0">{appointment.time}</p>
                            </div>
                            <div className={`${styles.appointmentCardInfo} col-10 py-2`}>
                                <div className="row py-2 py-lg-5">
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
    <div>
        <Navbar />
        <div className={styles.vetBodyDiv}>
            <div className="container-fluid">
                <div className="row pt-5 d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <button className={styles.bodyTitleButton} onClick={() => {navigate("/vet/calendar")}}>
                            <div className={styles.vetBodyTitleDesign}>
                                <p>Appointments</p>
                            </div>
                        </button>
                    </div>
                    <div className={`col-12 col-lg-8 ${styles.vetPreviewCard} my-4`}>
                        <p>Next appointments</p>
                        <AppointmentCards />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className={styles.bodyTitleButton} onClick={() => {navigate("/vet/clinical-records")}}>
                            <div className={styles.vetBodyTitleDesign}>
                                <p>Clinical records</p>
                            </div>
                        </button>
                    </div>
                    <div className={`col-8 ${styles.vetPreviewCard} my-4 py-5`}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-8 col-sm-6 col-lg-3">
                                <div className="ratio ratio-1x1">
                                    <img src={clinicalRecordsDict?.image}></img>
                                </div>
                            </div>
                            <div className="col-9 mt-4">
                                <div className="row">
                                    <div className="col-12 col-md-6">Name: {clinicalRecordsDict?.name}</div>
                                    <div className="col-12 col-md-6">Species: {clinicalRecordsDict?.species}</div>
                                    <div className="col-12 col-md-6">Date of birth: {clinicalRecordsDict?.date_of_birth}</div>
                                    <div className="col-12 col-md-6">Age: {clinicalRecordsDict?.age} years old</div>
                                    <div className="col-12 col-md-6">Color: {clinicalRecordsDict?.color}</div>
                                    <div className="col-12 col-md-6">Owner: {clinicalRecordsDict?.owner}</div>
                                    <div className="col-12 col-md-6">Sterilized: {clinicalRecordsDict?.sterilized}</div>
                                    <div className="col-12 col-md-6">Weight: {clinicalRecordsDict?.weight} Kg</div>
                                    <div className="col-12 col-md-6">Breed: {clinicalRecordsDict?.breed}</div>
                                    <div className="col-12 col-md-6">Allergies: {clinicalRecordsDict?.allergies}</div>
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
