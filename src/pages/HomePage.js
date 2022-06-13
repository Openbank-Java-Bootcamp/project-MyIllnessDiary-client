// src/pages/HomePage.js


import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import AdminView from "./PatientListPage";
import UserView from "../components/UserView";

const API_URL = "http://localhost:5005";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
