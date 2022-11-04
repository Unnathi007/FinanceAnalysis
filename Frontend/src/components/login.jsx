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
import { useState } from "react";

function LoginPage() {
  let navigate = useNavigate();
  const [iserror, setIserror] = useState(false);
  const [userName,setUserName]=useState("");
  const [passWord,setPassWord]=useState("");

  const [errorMessages, setErrorMessages] = useState([]);

  const validateEmail = (email) => {
    const re =
      /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    console.log(userName,passWord)
    // const Data = {
    //   "user_id": "abhigna",
    //   "passHash": "sdfghjk",

    // };
    let errorList = [];
    if (userName === "" || validateEmail(userName) === false) {
      errorList.push("Try Again, You didn't enter the email field");
    }
    if (passWord === "") {
      errorList.push("Try Again, You didn't enter the password field");
    }

    if (1) {
      console.log(userName,passWord);
      const updatedUserName = userName[5];
      const response = await axios.post("http://localhost:9090/login", {
        "user_id": userName,
        "passHash":passWord,
      });
      console.log(response.data);
      sessionStorage.setItem("username",userName)
      const x = sessionStorage.getItem("username")
      console.log(x);
      navigate('/user')
    } else {
      console.log("Error");


    }
  };
  useEffect(() => {}, []);

  return (
    <>
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
                      id="email"
                      onChange={e => setUserName(e.target.value)}
                    />
                    <Label className="font-weight-bold mb-2">Password</Label>
                    <Input
                      className="mb-3"
                      type="password"
                      placeholder="At least 8 characters"
                      id="password"
                      onChange={e => setPassWord(e.target.value)}
                    />
                  </FormGroup>
                  <Button
                    onClick={() => {
                      // const username = document.getElementById("email").value;
                      // const password = document.getElementById("password").value;
                      // handleLogin(username,password);
                      handleLogin();
                      console.log(userName,passWord);
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
