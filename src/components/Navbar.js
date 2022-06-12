import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      

      {isLoggedIn && (
        <>
        <Link to="/">
            <button>Home</button>
          </Link >
          <Link to="/diaries/:diaryId">
            <button>Diaries</button>
          </Link >
          <Link to="/login">
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
          </Link >
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