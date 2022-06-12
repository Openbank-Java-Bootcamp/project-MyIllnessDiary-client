import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddDiaryLog(props) {
  const [crisisNumber, setCrisisNumber] = useState(0);
  const [crisisType, setCrisisType] = useState("");
  const [duration, setDuration] = useState(0);
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
  
    e.preventDefault();

    const { diaryId } = props;
    
    const requestBody = { crisisNumber, crisisType, duration, mood, diaryId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/diarylogs`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setCrisisNumber(0)
        setCrisisType("");
        setDuration(0)
        setMood("")

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshDiary();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddDiaryLog">
      <h3>Add New Diary Log</h3>

      <form onSubmit={handleSubmit}>
        <label>Number of Crisis:</label>
        <input
          type="number"
          name="crisisNumber"
          value={crisisNumber}
          onChange={(e) => setCrisisNumber(e.target.value)}
        />
        <label>Crisis Type:</label>
        <input
          type="text"
          name="crisisType"
          value={crisisType}
          onChange={(e) => setCrisisType(e.target.value)}
        />
        <label>Duration:</label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label>Mood:</label>
        <input
          type="text"
          name="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />


        <button type="submit">Add Diary Log</button>
      </form>
    </div>
  );
}

export default AddDiaryLog;
