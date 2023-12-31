import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
// import { BsCartFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { currentPage = "nothing", CartCounting=[],onShowCartAdd= []} = props || {};
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  console.log("currentPage", props);
  // const [userLogin,setUserLogin]=useState(JSON.parse(localStorage.getItem("userLogin")))
const[user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
  console.log("userData",user)
  // times state
  const monthStr = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // setLoginBtnDisable(false);
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  // times
  const hour = new Date().getHours();
  const minis = new Date().getMinutes();
  const sec = new Date().getSeconds();
  // seconds
  setInterval(() => {
    setSeconds(new Date().getSeconds());
    setUser(JSON.parse(localStorage.getItem("user")))
  }, 1000);
  // console.log("month", monthStr.at(month), hour, minis, sec);
  // const [currentDate, setCurrentDate] = useState(getDate());
  // function getDate() {
  // const today = new Date();
  // const month = today.getMonth() + 1;
  // const year = today.getFullYear();
  // const date = today.getDate();
  // return `${month}/${date}/${year}`;
  // }
   const navigate=useNavigate();
  const handleAddShowCart = () => {
    console.log("click",onShowCartAdd);
    navigate("/cart")
  };
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Students</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home-page">Home</Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="/products">Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Headphones
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>{currentPage}</Nav.Link>
              <Button variant="dark" onClick={(e) => handleAddShowCart(e)}>
                {/* {CartCounting>0&&CartCounting} cart counting greater than 0 show only cart without any 0*/}
                Button{CartCounting > 0 && CartCounting}
              </Button>
               {!user?.email && (
               <Nav.Link href="/Login">Login</Nav.Link>)
               }
              <Nav.Link>
                {/* <h6 className='dateClass'>Today's Date: {currentDate}</h6> */}
                <h6 className="dateClass">
                  Date: {date} {monthStr.at(month)},{year} Time: {hour}:{minis}:
                  {seconds}{" "}
                </h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
