import React from "react";
import "../assets/styles/login.css";

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

function UserPage(){
    return(
        <div>
            <p>welcome user!!</p>
        </div>
    )
}

export default UserPage;