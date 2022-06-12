import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

function AdminView() {
  const [patients, setPatients] = useState([]);

  const getAllPatients = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPatients(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPatients();
  }, []);




  return (
    <div>Hello, doctor</div>

   
  );
}

export default AdminView;