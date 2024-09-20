// import Image from "next/image";
import './event_mgmt_form.css';

const eventMgmtForm = () => {
    return (
        <div id = 'eventMgmt'>
            <h1>Event Management</h1>
            <hr/>
            <form id = 'event_form'>

                <div className="inputbox"> {/* Textbox for event name with max length of 100 characters */}
                    <label for='eventNameInput'>Event Name:</label>
                    <input type='text' placeholder="Event Name..." id="eventNameInput" 
                    name="eventName" maxlength='100'required/>
                </div>

                <div className="inputbox"> {/* Textarea for event desc */}
                    <label for='eventDescrip'>Event Description:</label>
                    <textarea id="eventDescrip" name='eventDescrip' rows="4" cols='50' required>
                        Short Description of Event
                    </textarea>
                </div>

                <div className="inputbox"> {/* Textarea for event location */}
                    <label for='eventLoc'>Location:</label>
                    <textarea id="eventLoc" name='eventLoc' rows="4" cols='50' required>
                        Short Description of Event
                    </textarea>
                </div>

                <div className='inputbox'> {/* Dropdown menu for multiple skills */}
                    <label for="reqSkills">Required Skills:</label>
                    <select data-placeholder='Select' name="reqSkills" id="reqSkills" multiple class="chosen-select" required>
                        <option value=""></option>
                        <option value="sk1">Skill 1</option>
                        <option value="sk2">Skill 2</option>
                        <option value="sk3">Skill 3</option>
                        <option value="sk4">Skill 4</option>
                    </select>
                </div>

                <div className='inputbox'> {/* Dropdown menu for single selection of urgency */}
                    <label for="urg">Urgency:</label>
                    <select name="urg" id="urg" required>
                        <option value="high">High</option>
                        <option value="med">Med</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div> {/* Calendar date picker */}
                    <label for="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" value="2020-02-20" min="2024-01-01" max="2026-12-31" />
                </div>
            </form>
        </div>
    );
}


export default eventMgmtForm