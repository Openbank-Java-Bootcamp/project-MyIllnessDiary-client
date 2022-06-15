import axios from "axios";
import React, { useState } from "react";

const API_URL = "http://localhost:5005";

function AddDiaryPage(props) {
  const [diaryWeek, setDiaryWeek]=useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { diaryWeek };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/diaries`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setDiaryWeek("");
        
        props.refreshDiaries();
      })
      .catch((error) => console.log(error));
  };


  return( 
  <div className="AddDiary">
      <h3>Add New Diary</h3>
  
      <form onSubmit={handleSubmit}>

        <label></label>
        <input
          type="text"
          name="diaryWeek"
          onChange={(e) => setDiaryWeek(e.target.value)}
          value={diaryWeek}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default AddDiaryPage;

