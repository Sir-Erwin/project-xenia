
import './volunteer_match.css'; 
import React, {useState, useEffect} from 'react';
import NavBar from "../navbar";

 const VolunteerMatch = () => {
    const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const volunteerResponse = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/users/allusers');
        const eventResponse = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/events/allevents');

        if (!volunteerResponse.ok || !eventResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const volunteerData = await volunteerResponse.json();
        const eventData = await eventResponse.json();

        setVolunteers(volunteerData);
        setEvents(eventData);
      } catch (error) {
        console.error(error.message);
        setErrorMessage('Error fetching volunteers or events.');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/match`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ volunteer: selectedVolunteer, event: selectedEvent }),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm match');
      }

      const data = await response.json();
      setSuccessMessage('Volunteer matched successfully!');
      setErrorMessage(null);
      console.log('Match confirmed:', data);
    } catch (error) {
      console.error(error.message);
      setErrorMessage('Error confirming match.');
      setSuccessMessage(null);
    }
  };

    return (
        <div>
            <NavBar/>

            <div id='matchingContainer' className='matchingContainer'>

        <div id='match'>
                <h1>Volunteer Matching</h1>
                <hr/>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
             <form id = 'event_form' action="Submit" method="post" onSubmit={handleSubmit}>
        
             <div className="dropdown">
            <label htmlFor="Volunteer">Name:</label>
            <select
              id="Volunteer"
              name="Volunteer Name"
              value={selectedVolunteer}
              onChange={(e) => setSelectedVolunteer(e.target.value)}
              required
            >
              <option value="">Volunteer Name...</option>
              {volunteers.map((volunteer) => (
                <option key={volunteer.id} value={volunteer.name}>
                  {volunteer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <label htmlFor="Event">Events:</label>
            <select
              id="Event"
              name="Events"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              required
            >
              <option value="">Events...</option>
              {events.map((event) => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>

                <div>
                    <input type='submit' value='Confirm Match'/>
                </div>
            </form>
        </div>
        </div>
        </div>
        
    );
};

export default VolunteerMatch;