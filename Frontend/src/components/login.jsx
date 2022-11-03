import React, { useEffect } from "react";
import "../assets/styles/login.css";

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
import img from "../assets/images/img2.jpg";
import NavBar from "./navbar";
import Footer from "./footer";
import axios from "axios";

function LoginPage() {
  let navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleLogin = (username,password) => {
    
    let errorList = []
    if (username === "" || validateEmail(username) === false) {
      errorList.push("Try Again, You didn't enter the email field")
    }
    if (password === "") {
      errorList.push("Try Again, You didn't enter the password field")
    }

    if (errorList.length < 1) {
      axios.post(`https://jsonplaceholder.typicode.com/users`, {
        email: username,
        password : password,
      })
        .then(response => {
          sessionStorage.setItem("username",username);
          console.log("success");
          // let newUserdata = [...user];
          // newUserdata.push(newData);
          // setUser(newUserdata);
          // resolve()
          // setErrorMessages([])
          // setIserror(false)
        })
        .catch(error => {
          // setErrorMessages(["Cannot add data. Server error!"])
          // setIserror(true)
          // resolve()
        })
    } else {
      // setErrorMessages(errorList)
      // setIserror(true)
      // resolve()
    }
  }
  useEffect(()=>{
    

  },[])


  return (
    <>
      <NavBar />
      <div className="background">
        <div className="login-box">
          <div className="container">
            <div class="row app-des">
              <div class="col left-background ">
                <h2>Expense Analysis</h2>
                <p>We analyze your savings and expenses!</p>
                <CardImg className="mobile-img" src={img} alt="mobile-App" />
              </div>
              <div class="col login-form">
                <form>
                  <h2 className="font-weight-bold mb-4">Login</h2>
                  <FormGroup>
                    <Label className="font-weight-bold mb-2">Email</Label>
                    <Input
                      className="mb-3"
                      type="email"
                      placeholder="Enter your Email"
                    />
                    <Label className="font-weight-bold mb-2">Password</Label>
                    <Input
                      className="mb-3"
                      type="password"
                      placeholder="At least 8 characters"
                    />
                  </FormGroup>
                  <Button
                    onClick={() => {
                      handleLogin("abhigna@gmail.com","123456")
                    }}
                    className="mt-3  btn"
                  >
                    Login to your account
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/register");
                    }}
                    className="mt-3  btn"
                  >
                    new User Signup here!
                  </Button>
                  {/* <div className="text-center m-4">or continue with social account</div>
              <GoogleLoginButton className="mt-3 mb-3 px-auto text-center"/> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
