import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function FootDoctor() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      

      {isLoggedIn && (
        <>
        <Link to="/patients">
            <button>Back</button>
          </Link >
        </>
      )}

     
    </nav>
  );
}

export default FootDoctor;