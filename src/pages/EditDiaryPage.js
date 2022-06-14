import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import DiaryLogCard from "../components/DiaryLogCard";
import Navbar from "../components/Navbar"; 

const API_URL = "http://localhost:5005";

function EditDiaryPage(props) {
    const [crisisNumber, setCrisisNumber] = useState(0);
    const [crisisType, setCrisisType] = useState("");
    const [duration, setDuration] = useState(0);
    const [mood, setMood] = useState("");
    const [comments, setComments] = useState("");
    const [doctorName, setDoctorName] = useState("");

    const [diary, setDiary] = useState(null);
  
  const { diaryId } = useParams(); 

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
 
    axios
      .get(`${API_URL}/api/diarylogs/${diaryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        
        const oneDiary = response.data;
        setCrisisNumber(oneDiary.crisisNumber);
        setCrisisType(oneDiary.crisisType);
        setDuration(oneDiary.duration);
        setMood(oneDiary.mood);
        setComments(oneDiary.comments);
        setDoctorName(oneDiary.doctorName);
      })
      .catch((error) => console.log(error));
  }, [diaryId]);


  const handleFormSubmit = (e) => {

    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    const requestBody = { crisisNumber, crisisType, duration, mood, comments, doctorName };

    axios
      .put(`${API_URL}/api/diarylogs/${diaryId}`, requestBody, {
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
      .delete(`${API_URL}/api/diarylogs/${diaryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditDiaryPage">
      <Navbar />
      
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
        <label>Indications by the doctor:</label>
        <input
          type="text"
          name="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <label>Doctor Name:</label>
        <input
          type="text"
          name="doctorName"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          />

        <button type="submit">Update Diary</button>
      </form>

      <button onClick={deleteDiary}>Delete Diary</button>

      {diary &&
        diary.diaryLogs.map((diaryLog) => <DiaryLogCard key={diaryLog.id} {...diaryLog} />)}
    </div>
  );
}

export default EditDiaryPage;