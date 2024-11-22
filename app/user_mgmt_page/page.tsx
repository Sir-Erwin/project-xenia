"use client";

import React, { useState } from 'react';
import './user_manage.css';

export default function User_Manage_Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    skills: '',
    preferences: '',
    availability: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/routes/userManage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Profile updated:', data);
      } else {
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during submission:', error);
    }
  };

  return (
    <div className="ProfileManage_Container">
      <div id="ProfileManage">
        <h1>User Profile Management</h1>
        <h2>Please fill out the following Information</h2>
        <hr />
        <form id="ProfileInfo" onSubmit={handleSubmit}>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="Full Name" 
              maxLength={50} 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
            />        
          </div>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="Address Line 1" 
              maxLength={100} 
              name="address1" 
              value={formData.address1} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="Address Line 2 (optional)" 
              maxLength={100} 
              name="address2" 
              value={formData.address2} 
              onChange={handleChange} 
            />
          </div>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="City" 
              maxLength={100} 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="dropdown">
            <button type="button" className="dropbtn">State</button>
            <div className="dropdown-content">
              <a href="#" onClick={() => setFormData({ ...formData, state: 'TX' })}>TX</a>
              {/* Dropdown Options will be stored in DB */}
            </div>
          </div>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="Zip Code" 
              maxLength={9} 
              minLength={5} 
              name="zipcode" 
              value={formData.zipcode} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="dropdown2">
            <button type="button" className="dropbtn">Skills</button>
            <div className="dropdown-content2">
              <a href="#" onClick={() => setFormData({ ...formData, skills: 'Python' })}>Python</a>
              {/* Dropdown Options will be stored in DB */}
            </div>
          </div>
          <div className="largeinputbox">
            <input 
              type="text" 
              placeholder="Preferences" 
              maxLength={100} 
              name="preferences" 
              value={formData.preferences} 
              onChange={handleChange} 
            />
          </div>
          <div className="inputbox">
            <input 
              type="text" 
              placeholder="Volunteer Availability" 
              name="availability" 
              value={formData.availability} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" id="sumbitInfo">Submit Information</button>
        </form> 
      </div>
    </div>
  );
}
