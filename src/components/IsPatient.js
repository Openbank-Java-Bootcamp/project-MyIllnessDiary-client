// src/components/IsPrivate.js

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPatient({ children }) {
  const { isLoggedIn, isLoading ,user} = useContext(AuthContext);
  

  // If the authentication is still loading
  if (isLoading) return <p>Loading ...</p>;
  console.log(user);

  if (!isLoggedIn) {
    // If the user is not logged in
    return <Navigate to="/" />;
  } else {
    // If the user is logged in, allow to see the page
    return children;
  }
}

export default IsPatient;