'use client'

import React, { useState} from 'react';
import './user_manage.css';


export default function User_Management() {

  const [state, setState] = useState('')
  const formAction = async (formData : any) => {
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    setState(data)
  }

    
  return (
    <div className="ProfileManage_Container">
      
      <div id="ProfileManage">
        <h1>User Profile Management</h1>
        <h2>Please fill out the following Information</h2>
        <hr/>
        <form action = {formAction}>
          {state}
          <div className="inputbox">
            <input type="Full Name" placeholder="Full Name"maxLength={50} id="nameInput" name="Full Name" required/>        
          </div>
          <div className="inputbox">
            <input type="Email" placeholder="Email"maxLength={50} id="emailInput" name="email" required/>        
          </div>
          <div className="inputbox">
            <input type="Address 1" placeholder="Address Line 1" maxLength={100} id="address1Input" name="address1" required/>
          </div>
          <div className="inputbox">
            <input type="Address 2" placeholder="Address Line 2 (optional) " maxLength={100} id="address2Input" name="address2" />
          </div>
          <div className="inputbox">
            <input type="City" placeholder="City" maxLength={100} id="cityInput" name="city" required/>
          </div>
          <div className="dropdown">
            <button className="dropbtn">State</button>
            <div className="dropdown-content">
                <a href='#'>TX</a>
                {/* Dropdown Options will be stored in DB */}
          </div>
            <div className="inputbox">
            <input type="ZipCode" placeholder="Zip Code" maxLength={9} minLength={5} id="zipCode" name="zipcode" required/>
          </div>
          <div className="dropdown2">
            <button className="dropbtn">Skills</button>
            <div className="dropdown-content2">
                <a href='#'>Python</a>
                {/* Dropdown Options will be stored in DB */}
            </div>
            <div className="largeinputbox">
                <input type="preferences" placeholder="Preferences" maxLength={500} id="perferences" name="preferences"/>
            </div>
            <div className="inputbox">
                <input type="Availability" placeholder="Volunteer Availability" id="availability" name="availability" required/>
            </div>
          </div>
        </div>
          <button type="submit" id="sumbitInfo">Submit Information</button>
          
        </form> 
      </div>
  
    </div>
  );
}