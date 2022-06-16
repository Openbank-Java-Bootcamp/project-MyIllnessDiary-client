import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      {isLoggedIn && (
        <>
          {user.role === "ROLE_PATIENT" ? (
            <Link to="/">
              <button>Home</button>
            </Link>
          ) : (
            <Link to="/patients">
              <button>Home</button>
            </Link>
          )}
          <Link to="/login">
            <button onClick={logOutUser}>Logout</button>

            <span className="right">{user && user.name}</span>
          </Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
