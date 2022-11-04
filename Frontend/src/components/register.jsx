import React from "react";
import "../assets/styles/register.css";
import NavBar from "./navbar";
import {
  Button,
  FormGroup,
  Label,
  Input,
  CardImg
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import img from '../assets/images/8432.jpg';
import Footer from "./footer";
import { useState } from "react";
import axios from "axios";


function RegisterPage() {
  const handleRegister = async() => {
    console.log(data)
    const user_id = data.email[5];
    sessionStorage.setItem("username",user_id)
    const response = await axios.post("http://localhost:9090/registerUser", data);
    console.log(response.data);
    navigate('/user')
  } 
  const [data,setData]=useState({
    user_id : "",
    email : "",
    first_name: "",
    last_name : "",
    password : "",
    rePassword: "",
    phone: "1"
  })
  let navigate = useNavigate();
  return (<>
    <div className="background">
      <div className="login-box">
        <div className="container">
          <div class="row app-des">
            <div class="col left-background ">
              <br />
              <h2>Expense Analysis</h2>
              <p>We analyze your savings and expenses!</p>
              <br />
              <br />

              <CardImg
                className="mobile-img"
                src={img}
                alt="finance"
              />
            </div>
            <div class="col login-form">
              <form>
                <br />
                <h2 className="font-weight-bold mb-4">Register</h2>
                <FormGroup>
                  <Label className="font-weight-bold mb-2">Email</Label>
                  <Input
                    className="mb-3"
                    type="email"
                    placeholder="Enter you Email"
                    onChange={(e)=> {
                      setData({...data,email : e.target.value})
                    }}
                  />
                  <Label className="font-weight-bold mb-2">FirstName</Label>
                  <Input
                    className="mb-3"
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(e)=> {
                      setData({...data,first_name : e.target.value})
                    }}
                  />
                  <Label className="font-weight-bold mb-2">LastName</Label>
                  <Input
                    className="mb-3"
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={(e)=> {
                      setData({...data,last_name : e.target.value})
                    }}
                  />
                  <Label className="font-weight-bold mb-2">Password</Label>
                  <Input
                    className="mb-3"
                    type="password"
                    placeholder="At least 8 characters"
                    onChange={(e)=> {
                      setData({...data,password : e.target.value})
                    }}
                  />
                  <Label className="font-weight-bold mb-2">Re-Enter Password</Label>
                  <Input
                    className="mb-3"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e)=> {
                      setData({...data,rePassword : e.target.value})
                    }}
                  />
                </FormGroup>
                <Button onClick={() => {
                  handleRegister();
                    //navigate('/user');
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
    </div>
    <Footer/>
    </>
  );
}

export default RegisterPage;
