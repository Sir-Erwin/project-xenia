import './volunteer_hi.css'; 
import React from 'react';
import NavBar from "../navbar";

const VolunteerHistory = () => {
    // Example data for volunteer participation history
    const volunteerHistory = [
      {
        id: 1,
        volunteerName: 'Erwin Puthoor Manoj',
        eventName: 'Church',
        date: '2024-09-19',
        status: 'On Site'
      },
      {
        id: 2,
        volunteerName: 'Joshua Rodriguez',
        eventName: 'Foodbank',
        date: '2024-09-19',
        status: 'On Site'
      },
      {
        id: 3,
        volunteerName: 'Ahad Adesanya',
        eventName: 'Daycare',
        date: '2024-09-19',
        status: 'On Site'
      },

      {
        id: 4,
        volunteerName: 'Ben Cornick',
        eventName: 'School',
        date: '2024-09-19',
        status: 'On Site'
      }
    ];
  
    return (
      <div>
        <header>
          <nav>
            <div id="main-logo">
              <h1><a href="/">Project Xenia</a></h1>
            </div>
          </nav>
        </header>

        <div className="history">
        <h1>Volunteer  History</h1>
        <hr/>
        <table className="history-table">
          <thead>
            <tr>
              <th>Volunteer Name</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {volunteerHistory.map((record) => (
              <tr key={record.id}>
                <td>{record.volunteerName}</td>
                <td>{record.eventName}</td>
                <td>{record.date}</td>
                <td>{record.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    );
  };
  
  export default VolunteerHistory;
  