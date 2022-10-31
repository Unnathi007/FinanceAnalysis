import React from "react";
import "../assets/styles/login.css";
import NavBar from "./navbar";
import Footer from "./footer";
import Table from "react-bootstrap/Table";
import "../assets/styles/user.css";
function calculateTotal(){
  const list = document.getElementsByClassName("single-expense");
  console.log(list);
  return 1000;
}
function UserPage() {
  return (
    <React.Fragment>
      <div className="main-container">
        <NavBar />
        <div className="table-container">
          <div className="expenses">
            <h1>Expenses</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Harry</td>
                  <td>Larry the Bird</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td className="single-expense">1000</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{textAlign : "right"}}>Total Expenses</td>
                  <td>{calculateTotal}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="Incomes">
            <h1>Incomes</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Harry</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default UserPage;
