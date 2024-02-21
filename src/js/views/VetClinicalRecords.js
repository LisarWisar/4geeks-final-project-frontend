import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export const VetClinicalRecords = () => {

    const navigate = useNavigate()
    const [clinicalRecordsDataLength, setClinicalRecordsDataLength] = useState();
    const [clinicalRecordsNumberOfPages, setClinicalRecordsNumberOfPages] = useState()
    const [clinicalRecordsDict, setClinicalRecordsDict] = useState();
    /*const [appointmentsPage, setAppointmentsPage] = useState(); Will use later for pagination*/

    async function GetClinicalRecords () {
        await fetch('http://localhost:5007/vet/clinical-records', {method: "GET",})
        .then (response => {
            return response.json();
        })
        .then(data => {
            let page = getPages(data.data.length);
            setClinicalRecordsNumberOfPages(page);
            setClinicalRecordsDataLength(data.data.length);
            setClinicalRecordsDict(data.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetClinicalRecords()
      }, []);

    function Pagination () {

        let numberOfPages = Math.min(10, clinicalRecordsNumberOfPages);
    
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
    function ClinicalRecordsCards () {
        let clinicalRecords = []
        for (let i = 0; i<clinicalRecordsDataLength; i++){
            clinicalRecords.push(clinicalRecordsDict[i])
        }

        return(
            clinicalRecords.map(record => (
                <div>
                    <div className="container-fluid">
                        <div className="py-3 d-flex">
                            <div className="appointmentCardDate">
                                    <div className="ratio ratio-1x1">
                                        <img src={record.image}></img>
                                    </div>
                            </div>
                            <div className="appointmentCardInfo py-2">
                                    <div className="row">
                                        <div className="col-4 px-3 py-2">Species: {record?.species}</div>
                                        <div className="col-4 px-3 py-2">Age: {record?.age} years old</div>
                                        <div className="col-4 px-3 py-2">Color: {record?.color} </div>
                                        <div className="col-4 px-3 py-2">Name: {record?.name}</div>
                                        <div className="col-4 px-3 py-2">Owner: {record?.owner}</div>
                                        <div className="col-4 px-3 py-2 d-flex justify-content-end">
                                            <button className="mx-5" onClick={() => {navigate("/vet/calendar/appointment")}}>See appointment</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>))
        )
    }

    /* return export funcion */
    return(
        <div>
            <Navbar />
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row align-items-end pt-5">
                        <div className="col-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign createAppointmentButtonWidth">Create new clincal record</button>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="vetBodyTitleDesign d-flex justify-content-center">
                                <p>Clinical records</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign filterByButtonWidth">Filter By</button>
                        </div>
                    </div>
                </div>
                <Pagination />
                <ClinicalRecordsCards />
                <Pagination />
            </div>
        </div>
    )
}

function getPages(numberOfAppointments) {
    let maxCardsPerPage = 10;
    if (numberOfAppointments%maxCardsPerPage === 0){
        return (numberOfAppointments/maxCardsPerPage);
    }
    else{
        return (Math.trunc(numberOfAppointments/maxCardsPerPage)+1);
    }}