// src/pages/HomePage.js
import React from "react";
import { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import { AuthContext } from "../context/auth.context";

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

  const [roles, setRoles] = useState("");

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleRoles = (e) => setRoles(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { roles };

    axios
      .post(`${API_URL}/api/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
      })
      
  };


  return (
    <div className="DiaryPage">
      <h1>Home Page, List of diaries</h1>
      <AddDiaryPage refreshDiaries={getAllDiaries} />
      
      {diaries.map((diary) => (
        <DiaryCard key={diary.id} {...diary} />
      ))}
      
    </div>
  );
}

export default DiaryPage;
