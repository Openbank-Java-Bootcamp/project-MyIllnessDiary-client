import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import { AuthContext } from "../context/auth.context";
import { Link, useParams } from "react-router-dom";
import DiaryDetailsPage from "./DiaryDetailsPage";
import DiaryPage from "./DiaryPage";
import DiaryLogCard from "../components/DiaryLogCard";
import PatientCard from "../components/PatientCard"
import NavbarDoctor from "../components/NavbarDoctor"; 

const API_URL = "http://localhost:5005";

function PatientListPage(props) {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const [diary, setDiary] = useState(null);
  
  const { diaryId, userId } = useParams(); 

  const getAllPatients = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/auth/users`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPatients();
  }, []);


  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get(API_URL + `/api/auth/users`);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);




  const getDiary = () => {
    
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/diaries/${diaryId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneDiary = response.data;
        setDiary(oneDiary);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    
    getDiary();
  }, []);




  return (

    

    <div>
      <NavbarDoctor />
      Hello, doctor

      <h2>Here you can see the list of the patients</h2>

      {users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={"/"}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    
                      <h5 className="card-title">{user.name}</h5>
                    
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      
      

</div>
  );
}

export default PatientListPage;