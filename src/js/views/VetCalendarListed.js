import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";


export const VetCalendarListed = () => {

    const [appointmentsDataLength, setAppointmentsDataLength] = useState();
    const [appointmentsNumberOfPages, setAppointmentsNumberOfPages] = useState()
    const [appointmentsDict, setAppointmentsDict] = useState();
    /*const [appointmentsPage, setAppointmentsPage] = useState(); Will use later for pagination*/

    async function GetAppointments () {
        await fetch('http://localhost:5007/vet/calendar', {method: "GET",})
        .then (response => {
            return response.json();
        })
        .then(data => {
            let page = getPages(data.data.length);
            setAppointmentsNumberOfPages(page);
            setAppointmentsDataLength(data.data.length);
            setAppointmentsDict(data.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetAppointments()
      }, []);

    function Pagination () {

        let numberOfPages = Math.min(10, appointmentsNumberOfPages);
    
        let pagination = []
        for (let i = 0; i<numberOfPages ; i++){
            pagination.push(i+1);
        }
    
        return(
            <div className="d-flex justify-content-center pt-3 pb-3">
                <button className="paginationButtons">&lt;&lt;First</button>
                <button className="paginationButtons">Prev</button>
                {pagination.map(page => (
                    <button className="paginationButtons">{page}</button>))}
                <button className="paginationButtons">Next</button>
                <button className="paginationButtons">Last&gt;&gt;</button>
            </div>
             
            );
    }

    function AppointmentCards () {
        let appointments = []
        for (let i = 0; i<appointmentsDataLength; i++){
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
                                <p className="d-flex justify-content-center p-0 m-0">14:00</p>
                            </div>
                            <div className="col-10 appointmentCardInfo py-2">
                                <div className="row">
                                    <div className="col-6 px-3 py-2">Veterinarian: {appointment.vet_id}</div>
                                    <div className="col-6 px-3 py-2">Type of visit: {appointment.type_of_visit}</div>
                                    <div className="col-6 px-3 py-2">Species: {appointment.pet_id} </div>
                                    <div className="col-6 px-3 py-2">Breed: {appointment.pet_id}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))
        )
    }

    /* return VIEW function*/
    return(
        <div>
            <Navbar />
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row align-items-end pt-5">
                        <div className="col-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign createAppointmentButtonWidth">Create new appointment</button>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="vetBodyTitleDesign d-flex justify-content-center">
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign filterByButtonWidth">Filter By</button>
                        </div>
                    </div>
                </div>
                <Pagination />
                <div className="d-flex justify-content-between align-items-center calendarListedDayDivider">
                    <p className="calendarListedDay">Thursday 25</p>
                    <p className="calendarListedMonth">January</p>
                </div>
                <AppointmentCards />
                <Pagination />
            </div>
        </div>
    );
}

function getPages(numberOfAppointments) {
    let maxCardsPerPage = 10;
    if (numberOfAppointments%maxCardsPerPage === 0){
        return (numberOfAppointments/maxCardsPerPage);
    }
    else{
        return (Math.trunc(numberOfAppointments/maxCardsPerPage)+1);
    }}