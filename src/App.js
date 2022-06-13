
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import HomePage from "./pages/DiaryPage"; 
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsDoctor from "./components/IsDoctor";
import DiaryDetailsPage from './pages/DiaryDetailsPage';
import EditDiaryPage from './pages/EditDiaryPage';
import IsPatient from './components/IsPatient';
import PatientListPage from './pages/PatientListPage';
import { AuthContext } from './context/auth.context';
import { useContext } from 'react';

function App() {
  const {user}= useContext(AuthContext);
  const  {isLoggedIn}= useContext(AuthContext);
  console.log(user);
  return (
    <div className="App">
      <Navbar />
      
      
      

<Routes>


    {!isLoggedIn ? <></> :
  
      user.role === "ROLE_PATIENT"  ? 
      <Route
      path="/"
      element={<HomePage />} />: 
      <Route
      path="/patients"
      element={
      <PatientListPage />} />}
  
  <Route
          path="/diaries/:diaryId"
          element={
            <IsPatient>
              <DiaryDetailsPage />
            </IsPatient>
          }
        />

<Route
          path="/diaries/edit/:diaryId"
          element={
            <IsPatient>
              <EditDiaryPage />
            </IsPatient>
          }
        />


  <Route
    path="/signup"
    element={
      
        <SignupPage />
      
    }
  />
  <Route
    path="/login"
    element={
      
        <LoginPage />
      
    }
  />
</Routes>
    </div>
  );
}

export default App;
