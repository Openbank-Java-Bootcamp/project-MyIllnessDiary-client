import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function PatientListPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

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
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSearchedUsers = async () => {
      try {
        const response = await axios.get(API_URL + `/search?q=${query}`);

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedUsers();
  }, [query]);

  const filterUserHandler = (string) => {
    setQuery(string);
  };




  return (
    <div>Hello, doctor

<Search filterUserHandler={filterUserHandler} />



{users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={"/diaries/:diaryId" + user.id}>
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