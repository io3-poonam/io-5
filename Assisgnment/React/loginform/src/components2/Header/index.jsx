import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { BsCartFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const {currentPageShow, isCartEnabled = false, CartCounting=[],onShowCartAdd= []} = props || {};
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  // console.log("currentPage", props);
const[user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
  // console.log("userData",user);
    // current and previous data show get
  // local storage data get previous data counting
  const CartCountingLocal=localStorage.getItem("cardDataItems")
  const CartCountData=JSON.parse(CartCountingLocal)
  // console.log("local",CartCountData)
  const navigate=useNavigate();
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
    // setSeconds(new Date().getSeconds());
    setUser(JSON.parse(localStorage.getItem("user")))
  }, 1000);
  const handleAddShowCart = () => {
    // console.log("click",onShowCartAdd);
    navigate("/cart");

  };
  
  // clear local storage
  const HandleLogout=()=>{
    localStorage.clear("user")
    navigate("/login")
  }
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Flipkart</Navbar.Brand>
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
              {/* cart show only product */}
              {isCartEnabled===true &&(
              <Button variant="dark" style={{height:"2.8rem", margin:"0 1rem "}}><BsCartFill onClick={(e) => handleAddShowCart(e)}/>
              {/* cartCounting less than 0 than print cartCounting */}
              {CartCountData?.length >0 ?( CartCountData?.length):<>
              {CartCounting > 0 && CartCounting}</>}
              </Button> )}
              {user?.image &&(
              <img className="loginImage" src={user?.image} alt={user?.userName}/>)}
              <p className="loginPara">{user?.firstName} {user?.lastName}</p>
               {!user?.email && (
               <Button className="dangerLogin" style={{height:"2.8rem"}} variant="danger" href="/Login">Login</Button>
                )} 
                 {user?.email && (
               <Button href="/Login" variant="success" onClick={HandleLogout}>Logout</Button>
                )}
              <Nav.Link>
                {/* date remove when login user */}
                {currentPageShow==="Home Page"&&(
                <h6 className="dateClass">
                  {date} {monthStr.at(month)},{year} {hour}:{minis}:
                  {seconds}
                </h6>)}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
