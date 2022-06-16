// src/pages/HomePage.js
import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Navbar from "../components/Navbar";
import AddDiaryPage from "../components/AddDiaryPage";
import DiaryCard from "../components/DiaryCard";

const API_URL = "http://localhost:5005";

function DiaryPage() {
  const location = useLocation();
  const [diaries, setDiaries] = useState([]);
  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);

  const getAllDiaries = () => {
    const storedToken = localStorage.getItem("authToken");
    const id = user.id;
    console.log(user);
    if (location.state) {
      const id = location.state.userId;
      axios
        .get(`${API_URL}/api/diaries/users?id=${id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setDiaries(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`${API_URL}/api/diaries/users?id=${id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setDiaries(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (!isLoading) {
      getAllDiaries();
    }
  }, [user, location]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="DiaryPage">
      <Navbar />
      <h1>Home Page</h1>
      {user.role === "ROLE_PATIENT" ? (
        <div>
          <h2>Here you can see the list of your diaries</h2>
          <AddDiaryPage refreshDiaries={getAllDiaries} />
        </div>
      ) : (
        <div></div>
      )}

      {diaries.map((diary) => (
        <DiaryCard key={diary.id} {...diary} />
      ))}
    </div>
  );
}

export default DiaryPage;
