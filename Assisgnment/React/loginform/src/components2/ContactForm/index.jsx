import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { FaHandPointDown } from "react-icons/fa";

function ContactForm() {
  const [show,setShow]=useState(false);
const [userData,setUserData]=useState({
  email:"",password:"",
  name:"",
  number:"",
  state:"",
  city:"",
  zip:"",

})
const [isLoginClicked,setLoginClick]=useState(false);

const email=(event)=>{
  setUserData({...userData ,email: event.target.value})
}
const password=(event)=>{
  setUserData({...userData ,password: event.target.value})
}
const name=(event)=>{
  setUserData({...userData ,name: event.target.value})
}
const number=(event)=>{
  setUserData({...userData ,number: event.target.value})
}
const state=(event)=>{
  setUserData({...userData ,state: event.target.value})
}
const zip=(event)=>{
  setUserData({...userData ,zip: event.target.value})
}
const city=(event)=>{
  setUserData({...userData ,city: event.target.value})
}
  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoginClick(true);
  }
  const contactUs=(e)=>
{
  setShow(true)
}
  return (
    <>
      <div className="contact-container">
        <h2 className="contactHeading">
          So, What are you waiting for? Let's build your dream project!
        </h2>
        <p className="ContactPara1">
          Get interesting housing info straight to your inbox, and build the
          building you want. Contact us
        </p>
        <div className="contactImageAndPara">
        <FaHandPointDown  className="imageContact"/><p className="ContactPara2">
          Fill up the Contact details
        </p></div>
        <div className="button-container">
          <Button className="button" onClick={contactUs}>Contact Us</Button>
        </div>
      </div>
      {show?
      (
      <div className="container">
      <div className="my-5">
        <h1 className="text-center">Contact Services</h1>
      </div>
        <div className="row">
         <div className="col-md-6 col-10 ">
            <Form >
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={userData?.email}
                  onChange={(e)=>email(e)}
                  // value={Email}
                  // onChange={(event)=>inputEmail(event)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
             value={userData?.password}
             onChange={(e)=>password(e)}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="Name"
             value={userData?.name}
             onChange={(e)=>name(e)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  name="Number"
                  placeholder="Number"
                  value={userData?.number}
                  onChange={(e)=>number(e)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="City"
               value={userData?.city}
               onChange={(e)=>city(e)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label name="State"
             value={userData?.state}
             onChange={(e)=>state(e)}
                    >State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                  <option>Select state</option>
                    <option>Andhra pardesh</option>
                    <option>Bihar</option>
                    <option>Chandigarh</option>
                    <option>Delhi</option>
                    <option>Gujrat</option>
                    <option>Haryana</option>
                    <option>jharkand</option>
                    <option>Kerela</option>
                    <option>Mumbai</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajesthan</option>
                    <option>sikkam</option>
                    <option>Tamil nadhu</option>
                    <option>Uttar pardesh</option>

                    <option>West bangal</option>
                  </Form.Select>
                
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                  value={userData?.zip}
                  onChange={(e)=>zip(e)}
                    />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check out the all data field"
                />
              </Form.Group>

              <Button variant="outline-primary"
               onClick={(e)=>handleSubmit(e)}
               type="button"
               >
                Submit
              </Button>
            </Form>
          </div>
          {isLoginClicked?(
             <div className="col-md-6 col-10 ">

         <h2 className="heading_second">My name is 
         <span className="color" > {isLoginClicked && userData?.name} </span> 
         and  My email id is 
         <span className="color" > {isLoginClicked && userData?.email} </span> ,
           password  
           <span className="color" > {isLoginClicked ? userData?.password :""} </span> 
            and my Mobile number 
            <span className="color" > {isLoginClicked ? userData?.number :""} </span> 

           is and my state is
           <span className="color" > {isLoginClicked ? userData?.state :""} </span> 

              and my City is 
              <span className="color" > {isLoginClicked ? userData?.city :""} </span> 

               and zip Code
               <span className="color" > {isLoginClicked ? userData?.zip:""} </span> 

                all data are correct</h2>   
        </div>
         ):null} 
          
        </div>
      </div>
        ):null} 
    </>
  );
}

export default ContactForm;
