import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";

export const VetClinicalRecords = () => {

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
            </div>
        </div>
    )
}