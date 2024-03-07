import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCartFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
function Header(props) {
  const {
    currentPageShow,
    isCartEnabled = false,
    CartCounting = [],
    // onShowCartAdd = [],
  } = props || {};
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  // console.log("currentPage", props);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  //search State
  const [search, setSearch] = useState("");
  // current and previous data show get
  // local storage data get previous data counting
  const CartCountingLocal = localStorage.getItem("cardDataItems");
  const CartCountData = JSON.parse(CartCountingLocal);
  const navigate = useNavigate();
  // times state
  const monthStr = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
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
    setUser(JSON.parse(localStorage.getItem("user")));
  }, 1000);
  const handleAddShowCart = () => {
    navigate("/cart");
  };

  // clear local storage
  const HandleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
  };
  /**
   * description:- when getting value from input search
   * @param {Object}event
   */

  const HandleInputDSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
    /**
   * description:- when user search product
   * @param {Object}"event
   */
  const HandleSearchBtn = (event) => {
    // if(!search)return
    navigate("/products",{state:({type:"search",value:search})})
    console.log("HandleSearchBtn",search);
  };
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary position-fixed">
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
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1">
                <IoSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for Products, Brands and More"
                aria-label="Search for Products, Brands and More"
                aria-describedby="basic-addon1"
                value={search}
                onChange={(event) => HandleInputDSearch(event)}
              />
              <Button disabled={!search} variant="dark"  onClick={(e) => HandleSearchBtn(e)}>Search</Button>
            </InputGroup>

            <Nav>
              {/* cart show only product */}
              {isCartEnabled === true && (
                <Button
                  variant="dark"
                  style={{ height: "2.8rem", width: "5rem", margin: "0 1rem " }}
                >
                  <BsCartFill onClick={(e) => handleAddShowCart(e)} />
                  {/* cartCounting less than 0 than print cartCounting */}
                  {CartCountData?.length > 0 ? (
                    CartCountData?.length
                  ) : (
                    <>{CartCounting > 0 && CartCounting}</>
                  )}
                </Button>
              )}
              {user?.image && (
                <img
                  className="loginImage"
                  src={user?.image}
                  alt={user?.userName}
                />
              )}
              <p className="loginPara">
                {user?.firstName} {user?.lastName}
              </p>
              {!user?.email && (
                <Button
                  className="dangerLogin"
                  style={{ height: "2.8rem" }}
                  variant="danger"
                  href="/Login"
                >
                  Login
                </Button>
              )}
              {user?.email && (
                <Button href="/Login" variant="success" onClick={HandleLogout}>
                  Logout
                </Button>
              )}
              <Nav.Link>
                {/* date remove when login user */}
                {currentPageShow === "Home Page" && (
                  <h6 className="dateClass">
                    {date} {monthStr.at(month)},{year} {hour}:{minis}:{seconds}
                  </h6>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
