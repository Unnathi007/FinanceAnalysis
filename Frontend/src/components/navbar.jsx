import React from 'react';
import icon from '../assets/images/icon.png'
import profileUser from '../assets/images/profile-user.png'
import "../assets/styles/navbar.css";
import "../assets/styles/navbar.css";

export default function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={icon} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      
    </a>
    <a class="navbar-brand" href="#">ExpenseAnalysis</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Data</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Analysis</a>
        </li>
        
      </ul>
      <ul class="navbar-nav  mb-2 mb-lg-0">
      <li class="nav-item dropdown ms-auto">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profileUser} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>

      
    </div>
    

    </div>
</nav>  

    )
}
