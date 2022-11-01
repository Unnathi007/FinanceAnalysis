import React from "react";
import "../assets/styles/login.css";
import NavBar from "./navbar";
import Footer from "./footer";
import Table from "react-bootstrap/Table";
import "../assets/styles/user.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import ExpenseTable from "./ExpenseTable";

function UserPage() {
  return (
    <React.Fragment>
      <div className="main-container">
        <NavBar />
        <ExpenseTable/>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default UserPage;
