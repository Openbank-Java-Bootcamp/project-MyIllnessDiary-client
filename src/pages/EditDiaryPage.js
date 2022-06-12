import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 

const API_URL = "http://localhost:5005";

function EditDiaryPage(props) {
    const [crisisNumber, setCrisisNumber] = useState(0);
    const [crisisType, setCrisisType] = useState("");
    const [duration, setDuration] = useState(0);
    const [mood, setMood] = useState("");

  
  const { diaryId } = useParams(); 

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
 
    axios
      .get(`${API_URL}/api/diaries/${diaryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        
        const oneDiary = response.data;
        setCrisisNumber(oneDiary.crisisNumber);
        setCrisisType(oneDiary.crisisType);
        setDuration(oneDiary.duration);
        setMood(oneDiary.mood);
      })
      .catch((error) => console.log(error));
  }, [diaryId]);

  const handleFormSubmit = (e) => {

    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    const requestBody = { crisisNumber, crisisType, duration, mood };

    axios
      .put(`${API_URL}/api/diaries/${diaryId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate("/diaries/" + diaryId);
      });
  };

  const deleteDiary = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/diaries/${diaryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/diaries");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditDiaryPage">
      <h3>Edit Diary</h3>

      <form onSubmit={handleFormSubmit}>
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


        <button type="submit">Update Diary</button>
      </form>

      <button onClick={deleteDiary}>Delete Diary</button>
    </div>
  );
}

export default EditDiaryPage;