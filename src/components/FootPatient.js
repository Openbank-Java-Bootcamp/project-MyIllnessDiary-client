import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function FootPatient() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      {isLoggedIn && (
        <>
          {user.role === "ROLE_PATIENT" ? (
            <Link to="/">
              <button>Back</button>
            </Link>
          ) : (
            <Link to="/patients">
              <button>Back</button>
            </Link>
          )}
        </>
      )}
    </nav>
  );
}

export default FootPatient;
