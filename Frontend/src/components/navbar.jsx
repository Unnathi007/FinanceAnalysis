import React,{useState} from 'react';
import icon from '../assets/images/icon.png'
import profileUser from '../assets/images/profile-user.png'
import "../assets/styles/navbar.css";
import "../assets/styles/navbar.css";
import ProfileMoadal from './profileModal';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NavBar(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
        <nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={icon} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      
    </a>
    <Link class="navbar-brand" to="/">ExpenseAnalysis</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/user">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/analysis">Analysis</Link>
        </li>
        
      </ul>
      <ul class="navbar-nav  mb-2 mb-lg-0">
      <li class="nav-item dropdown ms-auto">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profileUser} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
      
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCenter" onClick={handleShow}>Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>

      
    </div>
    

    </div>
    <Modal
       show={show} 
       onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

        
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#013142"}}>Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                disabled="disabled"
                value="abhigna.vuppala@gmail.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                disabled="disabled"
                value="Abhigna"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea3"
            >
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                disabled="disabled"
                value="Vuppala"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea5"
            >
              <Form.Label>Total Savings</Form.Label>
              <Form.Control
                type="text"
                disabled="disabled"
                value="2899993"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea6"
            >
              <Form.Label>Total Expenses</Form.Label>
              <Form.Control
                type="text"
                disabled="disabled"
                value="17882893"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea6"
            >
              <Form.Label>Mostly Sepent On</Form.Label>
              <Form.Control
                type="text"
                disabled="disabled"
                value="Food"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
</nav>  

    )
}
