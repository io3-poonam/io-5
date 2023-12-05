import "./style.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function ContactForm() {
  const [show,setShow]=useState(false);
  const[Email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[number,setNumber]=useState("")
  const[zip,setZip]=useState("")
  const[city,setCity]=useState("")
  const[state,setState]=useState("")


  const handleSubmit=()=>{
    setShow(true);
  }
  const inputEmail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const inputPassword=(e)=>{
    setPassword(e.target.value)
  }
  const inputState=(e)=>{
    setState(e.target.value)
  }
  const inputCity=(e)=>{
    setCity(e.target.value)
  }
  const inputZip=(e)=>{
    setZip(e.target.value)
  }
  const inputName=(e)=>{
    setName(e.target.value)
  }
  const inputNumber=(e)=>{
    setNumber(e.target.value)
  }
  return (
    <>
      <div className="contact-container">
        <h2 className="h2">
          So, What are you waiting for? Let's build your dream project!
        </h2>
        <p className="para">
          Get interesting housing info straight to your inbox, and build the
          building you want. Contact us
        </p>
        <div className="button-container">
          <Button className="button">Contact Us</Button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center">Contact Services</h1>
      </div>
      <div className="container">
        <div className="row">
         <div className="col-md-6 col-10 ">
            <Form >
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={Email}
                  onChange={(event)=>inputEmail(event)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event)=>inputPassword(event)}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="Name"
                  value={name}
                  onChange={(event)=>inputName(event)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  name="Number"
                  value={number}
                  onChange={(event)=>inputNumber(event)}
                  placeholder="Number"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="City"
                    value={city}
                    onChange={(event)=>inputCity(event)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label name="State"
                    value={state}
                    onChange={(event)=>inputState(event)}
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
                    name="Zip"
                    value={zip}
                    onChange={(event)=>inputZip(event)}
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
               onClick={handleSubmit}
               type="submit">
                Submit
              </Button>
            </Form>
          </div>
         <div className="col-md-6 col-10 ">

         {show?( <h2 className="heading_second">My name is {name} and  My email id is {Email} , password  {password} and my Mobile number {number} is and my state is {state} and my City is {city} and zip Code {zip} all data are correct</h2> ):null} 
        </div>
          
        </div>
      </div>

    </>
  );
}

export default ContactForm;
