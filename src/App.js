import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/DiaryPage"; // <== IMPORT
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsDoctor from "./components/IsDoctor";
import DiaryPage from './pages/DiaryPage';
import AddDiaryPage from './components/AddDiaryPage';
import DiaryDetailsPage from './pages/DiaryDetailsPage';
import EditDiaryPage from './pages/EditDiaryPage';
import IsPatient from './components/IsPatient';
import AdminView from './pages/PatientListPage';
import PatientListPage from './pages/PatientListPage';

function App() {
  return (
    <div className="App">
      <Navbar />

<Routes>
<Route path="/" element={<IsPatient><HomePage /> </IsPatient>} />
  
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
