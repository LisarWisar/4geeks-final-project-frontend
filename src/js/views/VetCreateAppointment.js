import {Navbar} from "../components/Navbar.js"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';


export const VetCreateAppointment = () => {

    const navigate = useNavigate()
    const todayDate = new Date()
    const todayDateConstant = {
        "day": String(todayDate.getDate()).padStart(2, '0'),
        "month_ISO": String(todayDate.getMonth() + 1).padStart(2, '0'),
        "month": String(todayDate.getMonth() + 1),
        "year": todayDate.getFullYear()
    }
    const [appointmentData, setAppointmentData] = useState({
        "day": todayDateConstant.day, "month": todayDateConstant.month, "year": todayDateConstant.year,
        "vet_id": "", "pet_id":"", "time":"" , "comments": "", "type_of_visit": ""})
    const [veterinariansInfo, setVeterinariansInfo] = useState()
    const [veterinariansInfoLength, setVeterinariansInfoLength] = useState()
    const [petsInfo, setPetsInfo] = useState()
    const [petsInfoLength, setPetsInfoLength] = useState()
    
    async function GetAppointmentInfo () {
        await fetch('http://localhost:5007/vet/calendar/create-appointment', {method: "GET",})
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

    useEffect(() => {
        GetAppointmentInfo()
      }, []);

    function VeterinarianSelect () {
        let veterinariansSelect = []
        for (let i = 0; i<veterinariansInfoLength; i++){
            veterinariansSelect.push(veterinariansInfo[i])
        }

        return(
            veterinariansSelect.map(vet =>(
                <option value={vet?.vet_id}>{vet?.name}</option>
            ))
        )
    }

    function PetsSelect () {
        let petsSelect = []
        for (let i = 0; i<petsInfoLength; i++){
            petsSelect.push(petsInfo[i])
        }

        return(
            petsSelect.map(pet =>(
                <option value={pet?.pet_id}>{pet?.name}</option>
            ))
        )
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setAppointmentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let daySelect = []
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    for (let i = 1; i <numDays(appointmentData?.year, appointmentData.month)+1; i++){
        daySelect.push(i)}

    const monthsListed= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthsSelect = []
    for (let i = 0; i <12; i++){
        monthsSelect.push({"month_number": "0"+(i+1), "month_name": monthsListed[i]})
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
                                <select class="form-select" id="vetCreateAppointmentVet" name="vet_id" required onChange={handleChange}>
                                    <option selected disabled value="">Choose veterinarian</option>
                                    <VeterinarianSelect/>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentPet" class="form-label">Veterinarian</label>
                                <select class="form-select" id="vetCreateAppointmentPet" name="pet_id" required onChange={handleChange}>
                                    <option selected disabled value="">Choose pet</option>
                                    <PetsSelect/>
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
                                        <option selected disabled value={todayDateConstant.month_ISO}>{monthsListed[todayDateConstant.month]}</option>
                                        {monthsSelect.map(month =>(<option value={month.month_number}>{month.month_name}</option>))}
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
                            <button type="submit" className="btn btn-primary" onClick={() => {
                                console.log("data: ",appointmentData)
                            }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}