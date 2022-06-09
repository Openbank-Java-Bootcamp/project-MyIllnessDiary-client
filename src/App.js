import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

<Routes>
  <Route path="/" element={<HomePage />} />
  
  


  <Route
    path="/signup"
    element={
      <IsAnon>
        <SignupPage />
      </IsAnon>
    }
  />
  <Route
    path="/login"
    element={
      <IsAnon>
        <LoginPage />
      </IsAnon>
    }
  />
</Routes>
    </div>
  );
}

export default App;
