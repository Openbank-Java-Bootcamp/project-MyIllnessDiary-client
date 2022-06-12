// src/pages/HomePage.js
<<<<<<< HEAD
=======
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


>>>>>>> cc69a03716cab1454a103e699dcb6fab6e5bc6ae

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
<<<<<<< HEAD
=======
      
      {user === "admin"  ? <AdminView /> : <UserView />}
>>>>>>> cc69a03716cab1454a103e699dcb6fab6e5bc6ae
    </div>
  );
}

export default HomePage;
