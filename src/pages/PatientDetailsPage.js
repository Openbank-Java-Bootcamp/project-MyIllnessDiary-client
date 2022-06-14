import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import AddDiaryLog from "../components/AddDiaryLog";
import DiaryLogCard from "../components/DiaryLogCard";
import FootDoctor from "../components/FootDoctor"; 
import NavbarDoctor from "../components/NavbarDoctor"; 

const API_URL = "http://localhost:5005"; 

function PatientDetailsPage(props) {
    const [diary, setDiary] = useState(null);
  
    const { diaryId } = useParams(); 
  
  
    const getDiary = () => {
      
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${API_URL}/api/diaries/${diaryId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const oneDiary = response.data;
          setDiary(oneDiary);
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      
      getDiary();
    }, []);
  
    return (
      <div className="DiaryDetails">
        <NavbarDoctor />

        {diary && (
          <>
            <h1>{diary.diaryDate}</h1>
          </>
        )}
  
        <AddDiaryLog refreshDiary={getDiary} diaryId={diaryId} />
        
        {diary &&
          diary.diaryLogs.map((diaryLog) => <DiaryLogCard key={diaryLog.id} {...diaryLog} />)}
  
        
  
        <FootDoctor />
  
      </div>
    );
  }

export default PatientDetailsPage;