import React from 'react'
import "../../styles/CalendarViewSpecific.css";

export const CalendarViewSpecific = () => {
  return (
    <>
    <div>CalendarViewSpecific</div>
    
    <div className="vetBodyCalendar">
    <div className="d-flex justify-content-center">
    
                    </div>
                    <div className="col-8 calendarView my-4 py-5">
                        <div className="row">
                            <div className="col-9">
                                <div className="date-info">
                                <div className="row">
                                <div className="col-6"><h1>Saturday 27</h1></div>
                                    <div className="col-6">15:00 </div>
                                    <div className="col-6">Species: </div>
                                    <div className="col-6">Date of birth: </div>
                                    <div className="col-6">Age:  years old</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="col-8 calendarView my-4 py-5">
                        
                            <div className="col-3">
                                <div className="ratio ratio-1x1" id="image-pet">
                                    <img /*  src= {calendar} */></img>
                                </div>
                            </div>
                            
                            <div className="container-pet">
                                <div id="data-pet">
                                <div className="col-9">
                                <div className="row">
                                    <div className="col-6" >Pet Name: </div>
                                    <div className="col-6">Species: </div>
                                    <div className="col-6">Breed </div>
                                    <div className="col-6">Owner Name</div>
                                    </div>
                                    <div className='text-area'> 
                                    <p>Aditional Information</p>
                                    <textarea  placeholder='Type here..'/>
                                    </div>
      </div>
                                    
                                    </div>

                                
                            </div>
                            </div>
                        </div>
                    </>
  )
}
export default CalendarViewSpecific;

