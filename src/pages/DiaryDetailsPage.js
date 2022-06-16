import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddDiaryLog from "../components/AddDiaryLog";
import DiaryLogCard from "../components/DiaryLogCard";
import Navbar from "../components/Navbar";
import FootPatient from "../components/FootPatient";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function DiaryDetailsPage(props) {
  const [diary, setDiary] = useState(null);
  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);

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
      <Navbar />

      {diary && (
        <>
          <h1>{diary.diaryDate}</h1>
        </>
      )}
      {user.role === "ROLE_PATIENT" ? (
        <AddDiaryLog refreshDiary={getDiary} diaryId={diaryId} />
      ) : (
        <div></div>
      )}

      <div className="nextTo">
        {diary &&
          diary.diaryLogs.map((diaryLog) => (
            <DiaryLogCard key={diaryLog.id} {...diaryLog} />
          ))}
      </div>

     
      <FootPatient />
    </div>
  );
}

export default DiaryDetailsPage;
