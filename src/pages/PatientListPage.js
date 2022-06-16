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
  const [roleId, setRoleId] = useState(1);
  const [diary, setDiary] = useState(null);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  const { diaryId, userId } = useParams(); 

  



  useEffect(() => {
    const fetchData = async () => { 

      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${API_URL}/api/auth/patients`, 
        {headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          console.log(response.data)
          setUsers(response.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);


  return (

    <div>
      <NavbarDoctor />

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