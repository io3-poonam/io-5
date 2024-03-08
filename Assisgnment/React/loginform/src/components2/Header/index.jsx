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
import { PiShoppingCartLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import LogoFlip from "../../Assets/images/flipkart.png";
import plus from "../../Assets/images/plus_aef861.png"
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
  //DropdownItems
  const HandleDropProduct=(e,DropdownItems)=>{
    navigate("/products" , {state:{type:"search",value:DropdownItems}});

  }
  // product empty in case execute DropdownItems
  const HandleProductEmpty=(e)=>{
    navigate("/products" , {state:{type:"",value:""}});

  }
  return (
    <React.Fragment>
      <Navbar expand="lg" className=" position-fixed">
        <Container  className="bg_body_tertiary" >
        <Nav className="me-auto-left">
          <Nav.Link  href="/" className="me-auto-nav">
          <img style={{    width: "85px"}} src={LogoFlip} alt="LogoFlip"/> </Nav.Link>
          
          <Nav.Link className="me-auto-nav" href="/"><i className="colorE">Explore <strong className="colorP"> Plus </strong></i><img src={plus} className="plus" alt="plus"/></Nav.Link></Nav>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " className="justify-content-between">
            <Nav className="me-auto_items">
              <Nav.Link  className="nav_items" href="/home-page">Home</Nav.Link>
              <Nav.Link className="nav_items" href="/about-us">About</Nav.Link>
              <Nav.Link className="nav_items" href="/contact-us">Contact</Nav.Link>
              <Nav.Link className="nav_items" href="/products" onClick={(e)=>HandleProductEmpty(e)}>Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"phone")}>Phone</NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"laptop")}>Laptops</NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"macbook")}>
                  MacBook
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"book")}>
                  Book
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"skin")}>
                  Skin Care
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"Oil")}>
                 Oil
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>HandleDropProduct(e,"cream")}>
              Cream
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          

            <InputGroup className="input-box">
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
                <div className="cart_count"
               
                >
                  <PiShoppingCartLight  className="cart"
                  onClick={(e) => handleAddShowCart(e)} />
                  {/* cartCounting less than 0 than print cartCounting */}
                <p >  {CartCountData?.length > 0 ? (
                    CartCountData?.length
                  ) : (
                    <>{CartCounting > 0 && CartCounting}</>
                  )} </p>
                </div>
              )}
              {user?.image && (
                <img
                  className="loginImage"
                  src={user?.image}
                  alt={user?.userName}
                />
              )}
              <p className="loginPara">
                {user?.firstName}
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
                {/* date remove when login user */}
              {/* <Nav.Link>
                {currentPageShow === "Home Page" && (
                  <h6 className="dateClass">
                    {date} {monthStr.at(month)},{year} {hour}:{minis}:{seconds}
                  </h6>
                )}
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
