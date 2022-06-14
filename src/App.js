
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/DiaryPage"; 
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsDoctor from "./components/IsDoctor";
import DiaryDetailsPage from './pages/DiaryDetailsPage';
import DiaryPage from './pages/DiaryPage';
import EditDiaryPage from './pages/EditDiaryPage';
import IsPatient from './components/IsPatient';
import PatientListPage from './pages/PatientListPage';
import { AuthContext } from './context/auth.context';
import { useContext } from 'react';
import PatientDetailsPage from './pages/PatientDetailsPage';

function App() {
  const {user}= useContext(AuthContext);
  const  {isLoggedIn}= useContext(AuthContext);
  console.log(user);
  return (
    <div className="App">
      

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
      path="/"
      element={<DiaryPage />} />: 
      <Route />
  
  <Route
          path="/diaries/:diaryId"
          element={
              <DiaryDetailsPage />
            
          }
        />
        <Route
          path="/patients/details/:userId"
          element={
            
              <PatientDetailsPage />
            
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
