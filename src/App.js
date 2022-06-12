import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/DiaryPage"; // <== IMPORT
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import DiaryPage from './pages/DiaryPage';
import AddDiaryPage from './components/AddDiaryPage';
import DiaryDetailsPage from './pages/DiaryDetailsPage';
import EditDiaryPage from './pages/EditDiaryPage';

function App() {
  return (
    <div className="App">
      <Navbar />

<Routes>
<Route path="/" element={<IsPrivate><HomePage /> </IsPrivate>} />
  
  <Route
          path="/diaries/:diaryId"
          element={
            <IsPrivate>
              <DiaryDetailsPage />
            </IsPrivate>
          }
        />

<Route
          path="/diaries/edit/:diaryId"
          element={
            <IsPrivate>
              <EditDiaryPage />
            </IsPrivate>
          }
        />


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
