import axios from "axios";
import React, { useState } from "react";

const API_URL = "http://localhost:5005";

function AddPatient(props) {
  const [email, setEmail]=useState("");
  const [name, setName]=useState("");
  const [password, setPassword]=useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, name, password };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/users`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setEmail("");
        setName("");
        setPassword("");
        
        props.refreshPatients();
      })
      .catch((error) => console.log(error));
  };


  return( 
  <div className="AddDiary">
      <h3>Add New Patient</h3>
  
      <form onSubmit={handleSubmit}>

        <label></label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default AddPatient;