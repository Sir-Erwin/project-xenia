
import './volunteer_match.css'; 
import React from 'react';


const VolunteerMatch = () => {
    // State to store selected volunteer and matched event
    const selectedVolunteerId = document.getElementById('volunteerSelect').value;
    const matchedEventInput = document.getElementById('matchedEvent');

    {/*Mock data: Volunteers and events (In a real-world app, fetch this from the database)
    const volunteers = [
        { id: 1, name: 'Alice Johnson', skills: ['Teaching', 'Event Management'] },
        { id: 2, name: 'John Doe', skills: ['Medical Aid', 'First Aid'] },
        { id: 3, name: 'Sarah Williams', skills: ['Cooking', 'Fundraising'] }
    ];

    const events = [
        { id: 1, name: 'Community Teaching Event', requiredSkills: ['Teaching'] },
        { id: 2, name: 'Health Camp', requiredSkills: ['Medical Aid', 'First Aid'] },
        { id: 3, name: 'Fundraising Dinner', requiredSkills: ['Fundraising'] }
    ];
    */}

    // Function to handle volunteer selection and event matching
    const handleVolunteerChange = (event) => {
        const volunteerId = event.target.value;
        setSelectedVolunteerId(volunteerId);

        // Find the selected volunteer
        const selectedVolunteer = volunteers.find(v => v.id === parseInt(volunteerId));

        if (selectedVolunteer) {
            // Match event based on volunteer's skills
            const matchedEvent = events.find(event =>
                event.requiredSkills.some(skill => selectedVolunteer.skills.includes(skill))
            );

            if (matchedEvent) {
                setMatchedEvent(matchedEvent.name);
            } else {
                setMatchedEvent('No suitable event found');
            }
        } else {
            setMatchedEvent('');
        }
    };

    return (
        <div id='matching'>
            <h1>Volunteer Matching</h1>
            <hr />
            <form>
                {/* Volunteer Dropdown */}
                <div className="inputbox">
                    <label htmlFor="volunteerSelect">Volunteer Name:</label>
                    <select id="volunteerSelect" value={selectedVolunteerId} onChange={handleVolunteerChange}>
                        <option value="">Select Volunteer</option>
                        {volunteers.map(volunteer => (
                            <option key={volunteer.id} value={volunteer.id}>
                                {volunteer.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Matched Event Field */}
                <div className="inputbox">
                    <label htmlFor="matchedEvent">Matched Event:</label>
                    <input type="text" id="matchedEvent" value={matchedEvent} readOnly />
                </div>

                {/* Submit Button (optional, for further actions) */}
                <button type="submit">Confirm Match</button>
            </form>
        </div>
    );
};

export default VolunteerMatch;