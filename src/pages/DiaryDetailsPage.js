import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import AddDiaryLog from "../components/AddDiaryLog";
import DiaryLogCard from "../components/DiaryLogCard";
const API_URL = "http://localhost:5005"; 

function DiaryDetailsPage(props) {
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
      {diary && (
        <>
          <h1>{diary.diaryDate}</h1>
        </>
      )}

      <AddDiaryLog refreshDiary={getDiary} diaryId={diaryId} />
      
      {diary &&
        diary.diaryLogs.map((diaryLog) => <DiaryLogCard key={diaryLog.id} {...diaryLog} />)}

      

      <Link to="/">
        <button>Back Home</button>
      </Link>

     
      <Link to={`/diaries/edit/${diaryId}`}>
        <button>Edit Diary</button>
      </Link>
    </div>
  );
}

export default DiaryDetailsPage;
