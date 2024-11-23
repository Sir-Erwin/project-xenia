"use client";

import './volunteer_hi.css'; 
import React, {useState, useEffect} from 'react';
import NavBar from "../navbar";

const VolunteerHistory = () => {
  const [volunteerHistory, setVolunteerHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteerHistory = async () => {
      try {
        const response = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/events/allevents');
        if (!response.ok) {
          throw new Error("Failed to fetch volunteer history");
        }
        const data = await response.json();
        setVolunteerHistory(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVolunteerHistory();
  }, []);

  if (loading) return <div>Loading volunteer history...</div>;
  if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <NavBar/>

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
  