import React, { useState } from 'react';
import './notifications.css';


export default function Notifications() {
    
  return (
    <div className="Notifications_Container">
      
      <div id="Notifications">
        <h1>Notifications</h1>
        <hr/>
        <form id="ProfileInfo">
        <thead>
            <tr>
                <th scope="col">Event</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Description</th>
                <th scope="col">Attending?(Y/N)</th>
            </tr>
        </thead>
    <tr>
      <th scope="row">Charity Run</th>
      <td>Discovery Green</td>
      <td>11/11/2024</td>
      <td>5:00 PM</td>
      <td>Charity Run to Support Memorial Herman</td>
      <td>Y</td>
      {/*This content is going to be retrieved via the DB in the future*/}
    </tr>
    <tr>
      <th scope="row">Filler</th>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filer</td>
      <td>N</td>
    </tr>
    <tr>
      <th scope="row">Filler</th>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filer</td>
      <td>N</td>
    </tr>
    <tr>
      <th scope="row">Filler</th>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filer</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Filler</th>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filler</td>
      <td>Filer</td>
      <td>N</td>
    </tr>

        </form> 
      </div>
  
    </div>
  );
}
