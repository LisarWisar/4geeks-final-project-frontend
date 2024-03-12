import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar.js';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const VetCalendarListed = () => {

    const navigate = useNavigate()
    const todayDate = new Date()
    const todayDateConstant = {
        "day": String(todayDate.getDate()).padStart(2, '0'),
        "month": String(todayDate.getMonth() + 1).padStart(2, '0'),
        "year": todayDate.getFullYear()
    }
    const [appointmentsNumberOfPages, setAppointmentsNumberOfPages] = useState()
    const [appointmentsDict, setAppointmentsDict] = useState()
    const [appointmentsPage, setAppointmentsPage] = useState(1)
    const [maxCardsPerPage, setMaxCardsPerPage] = useState(10)  /*max ammount of cards shown per page*/
    const [filterBy, setFilterBy] = useState({
        "dateDayFilter":todayDateConstant.day, "dateMonthFilter": todayDateConstant.month, "dateYearFilter": todayDateConstant.year,
        "veterinarianFilter": "", "petNameFilter": "", "ownerNameFilter": ""}) /*uses ID as filter*/
    const [showFilterBy, setShowFilterBy] = useState(false);
    const [vetFilterData, setVetFilterData] = useState()
    const [petFilterData, setPetFilterData] = useState()
    const [ownerFilterData, setOwnerFilterData] = useState()
    const [showNoResults, setShowNoResults] = useState("")
    const [firstYearAppointments, setFirstYearAppointments] = useState()

    const handleCloseFilterBy = () => setShowFilterBy(false);
    const handleShowFilterBy = () => setShowFilterBy(true);

    async function GetAppointments () {
        await fetch('http://localhost:5007/vet/calendar', {method: "GET",})
        .then (response => {
            return response.json();
        })
        .then(data => {
            let filtered_appointments = FilterByParameters(data?.appointments_data)
            setAppointmentsDict(filtered_appointments)
            setVetFilterData(data?.filter_data_vets)
            setPetFilterData(data?.filter_data_pets)
            setOwnerFilterData(data?.filter_data_owners)
            let page = getPages(filtered_appointments.length)
            setAppointmentsNumberOfPages(page)
            setFirstYearAppointments(data?.appointments_data[data?.appointments_data.length-1].date_year)
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
        let first_shown_page = appointmentsPage-2
        let last_shown_page = appointmentsPage+1
    
        let pagination = []
        for (let i = Math.max(0,first_shown_page); i<Math.min(last_shown_page ,numberOfPages) ; i++){
            pagination.push(i+1);
        }
        
        let first_page = 1;
        let last_page = numberOfPages;

        return(
            <div className="d-flex justify-content-center pt-3 pb-3">
                <button onClick={() => {setAppointmentsPage(1)}} className="paginationButtons">&lt;&lt;First</button>
                <button onClick={() => {setAppointmentsPage(Math.max(appointmentsPage-1,first_page))}} className="paginationButtons">Prev</button>
                {pagination.map(page => (
                    <button onClick={() => {setAppointmentsPage(page)}} className="paginationButtons">{page}</button>
                    ))}
                    <button onClick={() => {setAppointmentsPage(Math.min(appointmentsPage+1, last_page))}} className="paginationButtons">Next</button>
                    <button onClick={() => {setAppointmentsPage(last_page)}} className="paginationButtons">Last&gt;&gt;</button>
                </div>
             
            );
    }

    function getPages(numberOfAppointments) {
        if (numberOfAppointments%maxCardsPerPage === 0){
            return (numberOfAppointments/maxCardsPerPage);
        }
        else{
            return (Math.trunc(numberOfAppointments/maxCardsPerPage)+1);
        }}


    function FilterByParameters (appointments) {
        let appointments_filtered = appointments
        if (filterBy.veterinarianFilter != false){
            appointments_filtered = appointments_filtered.filter((element) =>{
                return(element.vet_id.toString() === filterBy.veterinarianFilter)
        })}

        if (filterBy.petNameFilter != false){
            appointments_filtered = appointments_filtered.filter((element) =>{
                return(element.pet_id.toString() === filterBy.petNameFilter)
        })}

        if (filterBy.ownerNameFilter != false){
            appointments_filtered = appointments_filtered.filter((element) =>{
                return(element.owner_id.toString() === filterBy.ownerNameFilter)
        })}

        if (filterBy.dateDayFilter != false && filterBy.dateMonthFilter != false && filterBy.dateYearFilter != false){
            let filter_date_temp = filterBy?.dateYearFilter+"-"+filterBy?.dateMonthFilter+"-"+filterBy?.dateDayFilter
            appointments_filtered = appointments_filtered.filter((element) =>{
                return(element.full_date.toString() >= filter_date_temp)
        })}

        if(appointments_filtered == false){
            setShowNoResults(<h1>No results found!</h1>)
        }
        else if(appointments_filtered != false){
            setShowNoResults("")
        }

        return(appointments_filtered)
    }


    function AppointmentCards () {

        let appointments = []
        let first_card = maxCardsPerPage*(appointmentsPage-1)
        let last_card = maxCardsPerPage*appointmentsPage
        for (let i = first_card; i<Math.min(last_card, appointmentsDict?.length); i++){
            appointments.push(appointmentsDict[i])
        }

        let day = 0
        for (let i = 0; i<appointments.length; i++){
            let temp_day = appointments[i].date_day
            if (day != temp_day){
                day = temp_day
                appointments.splice(i, 0, {
                    "frontend_element_type": "date_header", "weekday": appointments[i].weekday, 
                    "date_day": appointments[i].date_day, "month_name": appointments[i].month_name})
            }
        }   

        return(
            appointments.map(appointment => {
                if (appointment.frontend_element_type == "card"){
                    return (<div>
                        <div className="container-fluid">
                            <div className="row py-3 d-flex justify-content-center">  
                                <div className="col-10 col-lg-2 appointmentCardDate d-flex flex-column align-items-center py-1 py-lg-5">
                                    <p className="d-flex justify-content-center p-0 m-0">{appointment.weekday_abbreviated} {appointment.date_day}</p>
                                    <p className="d-flex justify-content-center p-0 m-0">{appointment.time}</p>
                                </div>
                                <div className="col-10 appointmentCardInfoListed py-2">
                                    <div className="row py-2 py-lg-4">
                                        <div className="col-12 col-lg-6 px-3 py-2">Veterinarian: {appointment.veterinarian }</div>
                                        <div className="col-12 col-lg-6 px-3 py-2">Type of visit: {appointment.type_of_visit}</div>
                                        <div className="col-12 col-lg-6 px-3 py-2">Pet name: {appointment.pet_name} </div>
                                        <div className="col-12 col-lg-6 px-3 py-2">Owner name: {appointment.owner_name}</div>
                                        <div className="col-12 col-lg-6 px-3 py-2">Breed: {appointment.breed}</div>
                                        <div className="col-12 col-lg-6 px-3 py-2">Breed: {appointment.breed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                else if(appointment.frontend_element_type == "date_header") {
                    return(
                        <div className="d-flex justify-content-between align-items-center calendarListedDayDivider">
                            <p className="calendarListedDay">{appointment.weekday} {appointment.date_day}</p>
                            <p className="calendarListedMonth">{appointment.month_name}</p>
                        </div>
                    )
                }   
            })
        )
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFilterBy(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const monthsListed= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthsFilterList = []
    for (let i = 0; i <12; i++){
        monthsFilterList.push({"month_number": "0"+(i+1), "month_name": monthsListed[i]})
    }

    let yearsFilterList = []
    for (let i = firstYearAppointments; i < todayDateConstant.year+1; i++){
        yearsFilterList.push(i)
    }

    let daysFilterList = []
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    for (let i = 1; i <numDays(filterBy?.dateYearFilter, filterBy?.dateMonthFilter)+1; i++){
        daysFilterList.push(i)
    }

    /* return VIEW function*/
    return(
        <div>
            <Navbar />
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row align-items-end pt-5">
                        <div className="col-3 col-lg-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign createAppointmentButtonWidth" onClick={() => {navigate("/vet/calendar/create-appointment")}}>Create new appointment</button>
                        </div>
                        <div className="col-6 col-lg-4 d-flex justify-content-center">
                            <div className="vetBodyTitleDesign d-flex justify-content-center">
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div className="col-3 col-lg-4 d-flex justify-content-center">
                            <button className="vetBodyButtonDesign filterByButtonWidth" onClick={handleShowFilterBy} >Filter By</button>
                            <Modal show={showFilterBy} onHide={handleCloseFilterBy}>
                                <Modal.Header closeButton>
                                <Modal.Title>Choose Filters</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-10">
                                            <label for="vetFilterBy" className="form-label">Veterinarian</label>
                                            <select className="form-select" id="vetFilterBy" name="veterinarianFilter" onChange={handleChange}>
                                                <option selected disabled value="">Choose vet</option>
                                                <option value={""}>All veterinarians</option>
                                                {
                                                        vetFilterData?.map(vet =>(
                                                            <option value={vet?.vet_id}>{vet?.vet_name}</option>))
                                                }
                                            </select>
                                        </div>
                                        <div className="col-10">
                                            <label for="petFilterBy" className="form-label">Pet</label>
                                            <select className="form-select" id="petFilterBy" name="petNameFilter" onChange={handleChange}>
                                                <option selected disabled value="">Choose vet</option>
                                                <option value={""}>All pets</option>
                                                {petFilterData?.map(pet =>(
                                                    <option value={pet?.pet_id}>{pet?.pet_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-10">
                                            <label for="ownerFilterBy" className="form-label">Owner</label>
                                            <select className="form-select" id="ownerFilterBy" name="ownerNameFilter" onChange={handleChange}>
                                                <option selected disabled value="">Choose owner</option>
                                                <option value={""}>All owners</option>
                                                {ownerFilterData?.map(owner =>(
                                                    <option value={owner?.owner_id}>{owner?.owner_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label for="dayFilterBy" className="form-label">Day</label>
                                            <select className="form-select" id="dayFilterBy" name="dateDayFilter" onChange={handleChange}>
                                                <option selected disabled value={todayDateConstant.day}>{todayDateConstant.day}</option>
                                                {daysFilterList.map(day =>(
                                                    <option value={day}>{day}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label for="monthFilterBy" className="form-label">Month</label>
                                            <select className="form-select" id="monthFilterBy" name="dateMonthFilter" onChange={handleChange}>
                                                <option selected disabled value={todayDateConstant.month}>{monthsListed[todayDate.getMonth()]}</option>
                                                {monthsFilterList.map(month =>(
                                                    <option value={month?.month_number}>{month?.month_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label for="yearFilterBy" className="form-label">Year</label>
                                            <select className="form-select" id="yearFilterBy" name="dateYearFilter" onChange={handleChange}>
                                                <option selected disabled value={todayDateConstant.year}>{todayDateConstant.year}</option>
                                                {yearsFilterList?.map(year =>(
                                                    <option value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() =>{
                                    setFilterBy({
                                        "dateDayFilter":todayDateConstant?.day, "dateMonthFilter": todayDateConstant?.month, "dateYearFilter": todayDateConstant?.year,
                                        "veterinarianFilter": "", "petNameFilter": "", "ownerNameFilter": ""})
                                }}>
                                    Delete all filters
                                </Button>
                                <Button variant="primary" onClick={() => {
                                    handleCloseFilterBy()
                                    GetAppointments()
                                    setAppointmentsPage(1)
                                    }}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <Pagination />
                <div className="d-flex justify-content-center">{showNoResults}</div>
                <AppointmentCards />
                <Pagination />
            </div>
        </div>
    );
}