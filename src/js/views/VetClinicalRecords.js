import React, { useState, useEffect} from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/VetClinicalRecords.css"

export const VetClinicalRecords = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('jwt-token');
    const [clinicalRecordsNumberOfPages, setClinicalRecordsNumberOfPages] = useState();
    const [clinicalRecordsData, setClinicalRecordsData] = useState();
    const [clinicalRecordsPage, setClinicalRecordsPage] = useState(1);
    const [filterBy, setFilterBy] = useState({"petNameFilter": "", "ownerNameFilter": ""}); /*uses ID as filter*/
    const [showFilterBy, setShowFilterBy] = useState(false);
    const [petsFilterData, setPetsFilterData] = useState();
    const [ownersFilterData, setOwnersFilterData] = useState();
    const [showNoResults, setShowNoResults] = useState("")

    const handleCloseFilterBy = () => setShowFilterBy(false);
    const handleShowFilterBy = () => setShowFilterBy(true);


    async function GetClinicalRecords () {
        await fetch('http://localhost:5007/vet/clinical-records', 
        {method: "GET",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token //authorization token
        }})
        .then (response => {
            return response.json();
        })
        .then(data => {
            let filtered_clinical_records = FilterByParameters(data?.clinical_records)
            console.log("data: ",data?.clinicalRecords)
            setClinicalRecordsData(filtered_clinical_records);
            setPetsFilterData(data?.filter_data_pets);
            setOwnersFilterData(data?.filter_data_owners);
            let page = getPages(filtered_clinical_records?.length);
            setClinicalRecordsNumberOfPages(page);
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
        
        let first_shown_page = clinicalRecordsPage-2;
        let last_shown_page = clinicalRecordsPage+1;
    
        let pagination = []
        for (let i = Math.max(0,first_shown_page); i<Math.min(last_shown_page ,numberOfPages) ; i++){
            pagination.push(i+1);
        }

        let first_page = 1
        let last_page = numberOfPages;

        return(
            <div className="d-flex justify-content-center pt-3 pb-3">
                <button onClick={() => {setClinicalRecordsPage(1)}} className="paginationButtons">&lt;&lt;First</button>
                <button onClick={() => {setClinicalRecordsPage(Math.max(clinicalRecordsPage-1,first_page))}} className="paginationButtons">Prev</button>
                {pagination.map(page => (
                    <button onClick={() => {setClinicalRecordsPage(page)}} className="paginationButtons">{page}</button>
                    ))}
                    <button onClick={() => {setClinicalRecordsPage(Math.min(clinicalRecordsPage+1, last_page))}} className="paginationButtons">Next</button>
                    <button onClick={() => {setClinicalRecordsPage(last_page)}} className="paginationButtons">Last&gt;&gt;</button>
                </div>
             
        );
    }

    function FilterByParameters (clinical_records) {
        let clinical_records_filtered = clinical_records

        if (filterBy.petNameFilter != false){
            clinical_records_filtered = clinical_records_filtered.filter((element) =>{
                return(element.pet_id.toString() === filterBy.petNameFilter)
        })}

        if (filterBy.ownerNameFilter != false){
            clinical_records_filtered = clinical_records_filtered.filter((element) =>{
                console.log("element id: ", element.owner_id.toString())
                console.log("filter data: ", filterBy.ownerNameFilter)
                return(element.owner_id.toString() === filterBy.ownerNameFilter)
        })}

        if(clinical_records_filtered == false){
            setShowNoResults(<h1>No results found!</h1>)
        }
        else if(clinical_records_filtered != false){
            setShowNoResults("")
        }

        return(clinical_records_filtered)
    }

    function ClinicalRecordsCards () {
        let clinicalRecords = []
        for (let i = 0; i<clinicalRecordsData?.length; i++){
            clinicalRecords.push(clinicalRecordsData[i])
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
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-6 col-xl-4 px-3 py-2">Species: {record?.species}</div>
                                        <div className="col-6 col-xl-4 px-3 py-2">Age: {record?.age} years old</div>
                                        <div className="col-6 col-xl-4 px-3 py-2">Color: {record?.color} </div>
                                        <div className="col-6 col-xl-4 px-3 py-2">Name: {record?.name}</div>
                                        <div className="col-6 col-xl-4 px-3 py-2">Owner: {record?.owner}</div>
                                        <div className="col-6 col-xl-4 px-3 py-2 d-flex justify-content-end">
                                            <button className="clinicalRecordSeeMoreButton" onClick={() => {navigate(`/vet/clinical-records/${record?.pet_id}`)}}>See more...</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>))
        )
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFilterBy(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    /* return export funcion */
    return(
        <div>
            <Navbar />
            <div className="vetBodyDiv">
                <div className="container-fluid">
                    <div className="row align-items-end pt-5 d-flex justify-content-end">
                        <div className="col-6 col-lg-4 d-flex justify-content-center">
                            <div className="vetBodyTitleDesignClinicalRecords d-flex justify-content-center">
                                <p>Clinical records</p>
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
                                            <label for="ownerFilterBy" className="form-label">Owner</label>
                                            <select className="form-select" id="ownerFilterBy" name="ownerNameFilter" onChange={handleChange}>
                                                <option selected disabled value="">Choose owner</option>
                                                <option value={""}>All owners</option>
                                                {
                                                        ownersFilterData?.map(owner =>(
                                                            <option value={owner?.owner_id}>{owner?.owner_name}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-10">
                                            <label for="ownerFilterBy" className="form-label">Pet</label>
                                            <select className="form-select" id="petFilterBy" name="petNameFilter" onChange={handleChange}>
                                                <option selected disabled value="">Choose Pet</option>
                                                <option value={""}>All pets</option>
                                                {
                                                        petsFilterData?.map(pet =>(
                                                            <option value={pet?.pet_id}>{pet?.pet_name}</option>))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() =>{
                                    setFilterBy({"petNameFilter": "", "ownerNameFilter": ""})
                                }}>
                                    Delete all filters
                                </Button>
                                <Button variant="primary" onClick={() => {
                                    handleCloseFilterBy()
                                    GetClinicalRecords()
                                    setClinicalRecordsPage(1)
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