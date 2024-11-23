"use client";

// import Image from "next/image";
import React, {useState} from 'react';
import './event_mgmt_form.css';
import NavBar from "../navbar";

const EventMgmtForm = () => {
    const [formData, setFormData] = useState({
        eventName: "",
        description: "",
        location: "",
        skills: "",
        urgency: "",
        eventDate: "",
      });
      const [successMessage, setSuccessMessage] = useState(null);
      const [errorMessage, setErrorMessage] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/events/addEvent', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to create event");
          }
    
          const data = await response.json();
          setSuccessMessage("Event created successfully!");
          setErrorMessage(null);
          console.log("Event created:", data);
        } catch (error) {
          console.error(error.message);
          setErrorMessage("Error creating event: " + error.message);
          setSuccessMessage(null);
        }
      };







    return (
        <div>
            <NavBar/>

            <div className='eventMgmtContainer'>
            
        <div id = 'eventMgmt'>
            <h1>Event Management</h1>
            <hr/>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form id = 'event_form' action="Submit" method="post" onSubmit={handleSubmit}>
            
                <div className="inputbox"> {/* Textbox for event name with max length of 100 characters */}
                    <label for='eventNameInput'>Event Name:</label>
                    <input type='text' placeholder="Event Name..." id="eventNameInput" 
                    name="eventName" maxlength='100' onChange={handleChange} required/>
                </div>

                <div className="inputbox"> {/* Textarea for event desc */}
                    <label for='eventDescrip'>Event Description:</label>
                    <textarea id="eventDescrip" name='eventDescrip' rows="4" cols='50' 
                        placeholder='Short Description of Event' onChange={handleChange} required>
                        
                    </textarea>
                </div>

                <div className="inputbox"> {/* Textarea for event location */}
                    <label for='eventLoc'>Location:</label>
                    <textarea id="eventLoc" name='eventLoc' rows="4" cols='50' 
                        placeholder='Location of Event' onChange={handleChange} required>
                        
                    </textarea>
                </div>

                <div className='inputbox'> {/* Dropdown menu for multiple skills */}
                    <label for="reqSkills">Required Skills:</label>
                    <select size = '2' data-placeholder='Select' name="reqSkills" id="reqSkills" 
                        multiple class="chosen-select" style={{color:'#ccc'}} onChange={handleChange} required>
                            <option value='null'>Select Skills</option>
                            <option value="sk1">Skill 1</option>
                            <option value="sk2">Skill 2</option>
                            <option value="sk3">Skill 3</option>
                            <option value="sk4">Skill 4</option>
                    </select>
                </div>

                <div className='inputbox'> {/* Dropdown menu for single selection of urgency */}
                    <label for="urg">Urgency:</label>
                    <select name="urg" id="urg" style={{color:'#000'}} onChange={handleChange} required>
                        <option value="null"></option>
                        <option value="high">High</option>
                        <option value="med">Med</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div> {/* Calendar date picker */}
                    <label for="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" 
                        min="2024-01-01" max="2026-12-31" onChange={handleChange} required/>
                </div>

                <div>
                    <input type='submit' value='Submit'/>
                </div>
            </form>
        </div>
        </div>
        </div>
        
    );
}


export default EventMgmtForm;