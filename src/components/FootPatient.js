import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function FootPatient() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      

      {isLoggedIn && (
        <>
        <Link to="/">
            <button>Back</button>
          </Link >
        </>
      )}

     
    </nav>
  );
}

export default FootPatient;