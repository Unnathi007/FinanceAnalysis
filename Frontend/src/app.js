import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import UserPage from "./components/user";
import Analysis from "./components/analysis";
  
function App() {
  return (
    <div className="">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/logout" element={<LoginPage/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}
  
export default App;