'use client'; 

import React, { useState } from 'react';
import './user_manage.css';

export default function User_Management() {
  const [state, setState] = useState<string>('');
  const [formError, setFormError] = useState<string | null>(null);

  const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    try {
      const res = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setFormError(errorData.message || 'An error occurred.');
        return;
      }

      const data = await res.json();
      setState(`Success: ${data.message}`);
      setFormError(null); // Clear errors
    } catch (error) {
      setFormError('Failed to submit the form.');
    }
  };

  return (
    <div className="ProfileManage_Container">
      <div id="ProfileManage">
        <h1>User Profile Management</h1>
        <h2>Please fill out the following Information</h2>
        <hr />
        <form onSubmit={formAction}>
          {state && <p style={{ color: 'green' }}>{state}</p>}
          {formError && <p style={{ color: 'red' }}>{formError}</p>}
          <div className="inputbox">
            <input type="text" placeholder="Full Name" maxLength={50} id="nameInput" name="name" required />
          </div>
          <div className="inputbox">
            <input type="email" placeholder="Email" maxLength={50} id="emailInput" name="email" required />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Address Line 1" maxLength={100} id="address1Input" name="address1" required />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Address Line 2 (optional)" maxLength={100} id="address2Input" name="address2" />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="City" maxLength={100} id="cityInput" name="city" required />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="State" maxLength={2} id="stateInput" name="state" required />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Zip Code" maxLength={9} minLength={5} id="zipCode" name="zipcode" required />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Preferences" maxLength={500} id="preferences" name="preferences" />
          </div>
          <div className="inputbox">
            <input type="text" placeholder="Volunteer Availability" id="availability" name="availability" required />
          </div>
          <button type="submit" id="submitInfo">Submit Information</button>
        </form>
      </div>
    </div>
  );
}
