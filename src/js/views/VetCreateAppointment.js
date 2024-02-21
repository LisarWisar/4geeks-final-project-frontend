import {Navbar} from "../components/Navbar.js"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';


export const VetCreateAppointment = () => {

    const navigate = useNavigate()
    const [appointmentData, setAppointmentData] = useState({})
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
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Date</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Time</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentComments" className="form-label">Comments</label>
                                <input name="comments" type="text" className="form-control" id="vetCreateAppointmentComments" required onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label for="vetCreateAppointmentTypeOfVisit" className="form-label">Type of visit</label>
                                <input name="typeOfVisit" type="text" className="form-control" id="vetCreateAppointmentTypeOfVisit" required onChange={handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => {console.log("data: ",appointmentData)}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}