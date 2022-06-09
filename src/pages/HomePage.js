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

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleRoles = (e) => setRoles(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { roles };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
      })
      
  };


  return (
    <div>
      <h1>Home Page</h1>
      
      {user === {roles}  ? <AdminView /> : <UserView />}
    </div>
  );
}

export default HomePage;
