// src/pages/HomePage.js
import React from "react";
import { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import { AuthContext } from "../context/auth.context";
import Navbar from "../components/Navbar"; 
import AddDiaryPage from "../components/AddDiaryPage";
import DiaryCard from "../components/DiaryCard";

const API_URL = "http://localhost:5005";

function DiaryPage() {
  const [diaries, setDiaries] = useState([]);

  const getAllDiaries = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/diaries`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setDiaries(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllDiaries();
  }, []);

  


  return (
    <div className="DiaryPage">
      <Navbar />

      <h1>Home Page</h1>
      <h2>Here you can see the list of your diaries</h2>
      <AddDiaryPage refreshDiaries={getAllDiaries} />
      
      {diaries.map((diary) => (
        <DiaryCard key={diary.id} {...diary} />
      ))}
      
    </div>
  );
}

export default DiaryPage;
