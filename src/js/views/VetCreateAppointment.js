import {Navbar} from "../components/Navbar.js"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';


export const VetCreateAppointment = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('jwt-token');
    const todayDate = new Date()
    const todayDateConstant = {
        "day": String(todayDate.getDate()).padStart(2, '0'),
        "month_ISO": String(todayDate.getMonth() + 1).padStart(2, '0'),
        "month": String(todayDate.getMonth() + 1),
        "year": todayDate.getFullYear()
    }
    const [appointmentData, setAppointmentData] = useState({
        "day": todayDateConstant.day, "month": todayDateConstant.month_ISO, "year": todayDateConstant.year,
        "vetID": "", "petID":"", "time":"" , "comments": "", "typeOfVisit": ""})
    const [veterinariansInfo, setVeterinariansInfo] = useState()
    const [veterinariansInfoLength, setVeterinariansInfoLength] = useState()
    const [petsInfo, setPetsInfo] = useState()
    const [petsInfoLength, setPetsInfoLength] = useState()
    
    async function GetAppointmentInfo () {
        await fetch('http://localhost:5007/vet/calendar/create-appointment', 
        {method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token //authorization token
        }})
        .then (response => {
            return response.json();
        })
        .then(data => {
            setVeterinariansInfo(data.vet_info)
            setVeterinariansInfoLength(data.vet_info.length)
            setPetsInfo(data.pet_info)
            setPetsInfoLength(data.pet_info.length)
        })
        .catch(error => {
            console.log(error);
        })
    }

    async function SendAppointmentInfo () {
        await fetch('http://localhost:5007/vet/calendar/create-appointment', {method: "POST",
            headers: {
                "Content-Type": "application/json"
                /*'Authorization': 'Bearer ' + token //authorization token*/
            },
          body: JSON.stringify({
            appointmentData
          })})
          .then (response => {
            return response.json()
        })
        .then(data => {
            if (data.status == "ok"){
                navigate("/vet/calendar")
            }
            else{
                console.log(data.status)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetAppointmentInfo()
      }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setAppointmentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let veterinariansSelect = []
    for (let i = 0; i<veterinariansInfoLength; i++){
        veterinariansSelect.push(veterinariansInfo[i])
    }

    let petsSelect = []
    for (let i = 0; i<petsInfoLength; i++){
        petsSelect.push(petsInfo[i])
    }

    let daySelect = []
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    for (let i = 1; i <numDays(appointmentData?.year, appointmentData.month)+1; i++){
        let dayString = `${i}`
        daySelect.push(dayString.padStart(2, "0"))}

    const monthsListed= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthsSelect = []
    for (let i = 0; i <12; i++){
        let monthString = `${i+1}`
        monthsSelect.push({"month_number": monthString.padStart(2, "0"), "month_name": monthsListed[i]})
    }

    let yearSelect = []
    for (let i = todayDateConstant.year; i < todayDateConstant.year+2; i++){
        yearSelect.push(i)
    }

    let timeSelect = []
    for (let hour = 10; hour <18; hour++){
        for (let minutes = 0; minutes < 2; minutes++){
            minutes = 30*minutes
            let minutes_string = minutes.toString()
            timeSelect.push(hour+":"+minutes_string.padStart(2, "0"))
        }
    }

    function SubmitVerification (){
        if (appointmentData.day !=false && appointmentData.month != false && appointmentData.year != false && appointmentData.petID != false /*Comments are not required*/
            && appointmentData.time != false && appointmentData.typeOfVisit != false && appointmentData.vetID != false){
            return(true)
        }
        else{
            return(false)
        }
    }

    /*Return view function */
    return(
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <form>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentVet" class="form-label">Veterinarian</label>
                                <select class="form-select" id="vetCreateAppointmentVet" name="vetID" required onChange={handleChange}>
                                    <option selected disabled value="">Choose veterinarian</option>
                                    {veterinariansSelect.map(vet =>(
                                        <option value={vet?.vet_id}>{vet?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentPet" class="form-label">Veterinarian</label>
                                <select class="form-select" id="vetCreateAppointmentPet" name="petID" required onChange={handleChange}>
                                    <option selected disabled value="">Choose pet</option>
                                    {petsSelect.map(pet =>(
                                        <option value={pet?.pet_id}>{pet?.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-4">
                                    <label for="vetCreateAppointmentDay" className="form-label">Day</label>
                                    <select class="form-select" id="vetCreateAppointmentDay" name="day" required onChange={handleChange}>
                                        <option selected disabled value={todayDateConstant.day}>{todayDateConstant.day}</option>
                                        {daySelect.map(day =>(<option value={day}>{day}</option>))}
                                    </select>
                                </div>
                                <div className="mb-3 col-4">
                                    <label for="vetCreateAppointmentMonth" className="form-label">Month</label>
                                    <select class="form-select" id="vetCreateAppointmentMonth" name="month" required onChange={handleChange}>
                                        <option selected disabled value={todayDateConstant?.month_ISO}>{monthsListed[todayDateConstant?.month]}</option>
                                        {monthsSelect.map(month =>(<option value={month?.month_number}>{month?.month_name}</option>))}
                                    </select>
                                </div>
                                <div className="mb-3 col-4">
                                    <label for="vetCreateAppointmentYear" className="form-label">Year</label>
                                    <select class="form-select" id="vetCreateAppointmentYear" name="year" required onChange={handleChange}>
                                        <option selected disabled value={todayDateConstant.year}>{todayDateConstant.year}</option>
                                        {yearSelect.map(year =>(<option value={year}>{year}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentTime" className="form-label">Time</label>
                                <select class="form-select" id="vetCreateAppointmentTime" name="time" required onChange={handleChange}>
                                    <option selected disabled value="">Choose time of date</option>
                                    {timeSelect.map(time =>(<option value={time}>{time}</option>))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentComments" className="form-label">Comments</label>
                                <input name="comments" type="text" className="form-control" id="vetCreateAppointmentComments" required onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentTypeOfVisit" className="form-label">Type of visit</label>
                                <input name="typeOfVisit" type="text" className="form-control" id="vetCreateAppointmentTypeOfVisit" required onChange={handleChange}/>
                            </div>
                        </form>
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            if (SubmitVerification() == true){
                                console.log("data: ",appointmentData)
                                SendAppointmentInfo()
                            }
                            else{
                                console.log("Missing information")
                            }
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}