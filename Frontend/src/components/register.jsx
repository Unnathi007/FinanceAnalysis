import React from "react";
import "../assets/styles/login.css";
import NavBar from "./navbar";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import img from '../assets/images/8432.jpg'
import Footer from "./footer";
function RegisterPage() {
  let navigate = useNavigate();
  return (<>
    <NavBar/>
    <div className="background">
      <div className="login-box">
        <div className="container">
          <div class="row app-des">
            <div class="col left-background ">
              <h2>Expense Analysis</h2>
              <p>We analyze your savings and expenses!</p>
              <CardImg
                className="mobile-img"
                src={img}
                alt="finance"
              />
            </div>
            <div class="col login-form">
              <form>
                <h2 className="font-weight-bold mb-4">Register</h2>
                <FormGroup>
                  <Label className="font-weight-bold mb-2">Email</Label>
                  <Input
                    className="mb-3"
                    type="email"
                    
                  />
                  <Label className="font-weight-bold mb-2">FirstName</Label>
                  <Input
                    className="mb-3"
                    type="text"
                    
                  />
                  <Label className="font-weight-bold mb-2">LastName</Label>
                  <Input
                    className="mb-3"
                    type="text"
                  />
                  <Label className="font-weight-bold mb-2">Password</Label>
                  <Input
                    className="mb-3"
                    type="password"
                    placeholder="At least 8 characters"
                  />
                  <Label className="font-weight-bold mb-2">ReEnter Password</Label>
                  <Input
                    className="mb-3"
                    type="password"
                  />
                </FormGroup>
                <Button onClick={() => {
                    navigate('/user');
                  }}
                  className="mt-3  btn">Register to your account</Button>
                <Button onClick={() => {
                    navigate('/');
                  }}
                  className="mt-3  btn">Already a User SignIn here!</Button>
                {/* <div className="text-center m-4">or continue with social account</div>
              <GoogleLoginButton className="mt-3 mb-3 px-auto text-center"/> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default RegisterPage;
