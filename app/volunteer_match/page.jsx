
import './volunteer_match.css'; 
import React from 'react';


 const VolunteerMatch = () => {
    return (
        <div id='matchingContainer' className='matchingContainer'>

        <div id='match'>
                <h1>Volunteer Matching</h1>
                <hr/>
            <form id = 'event_form' action="Submit" method="post">
        
                <div className="dropdown">
                <label htmlFor="Volunteer">Name:</label>
                <select id="Volunteer" name="Volunteer Name" required>
                    <option value="">Volunteer Name...</option>
                    <option value="name1">Erwin Puthoor Manoj</option>
                    <option value="name2">Joshua Rodriguez</option>
                    <option value="name3">Ahad Adesanya</option>
                    <option value="name4">Ben Cornick</option>
                </select>
                </div>

                <div className="dropdown">
                <label htmlFor="eventname">Events</label>
                <select id="Event" name="Events" required>
                    <option value="">Events...</option>
                    <option value="event1">School</option>
                    <option value="event2">Church</option>
                    <option value="event3">Food Bank</option>
                    <option value="event4">Daycare</option>
                </select>
                </div>

                <div>
                    <input type='submit' value='Confirm Match'/>
                </div>
            </form>
        </div>
        </div>
    );
};

export default VolunteerMatch;