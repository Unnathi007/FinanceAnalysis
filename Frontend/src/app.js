import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import UserPage from "./components/user";
  
function App() {
  return (
    <div className="">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}
  
export default App;