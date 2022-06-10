// src/pages/HomePage.js
import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

const API_URL = "http://localhost:5005";

function HomePage({ user }) {
  const [roles, setRoles] = useState("");



  return (
    <div>
      <h1>Home Page</h1>
      
      {user === "admin"  ? <AdminView /> : <UserView />}
    </div>
  );
}

export default HomePage;
