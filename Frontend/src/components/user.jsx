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
import SavingsTable from "./SavingsTable";

function UserPage() {
  return (
    <React.Fragment>
      <div className="main-container">
        <NavBar />
        <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
          <div style={{flex:'1',padding:'20px',width:'50%'}}>
          <ExpenseTable/>
          </div>
          <div style={{flex:'1',padding:'20px',width:'50%'}}>
          <SavingsTable/>
          </div>
            {/* <ExpenseTable/>
          <SavingsTable/> */}
          
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default UserPage;
