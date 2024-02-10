import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import Loader from "../../Pages/Loader/Loader"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showLoader, setShowLoader] = useState(false);
  const navigate=useNavigate()
  const handleInputE = (e) => {
    setFormData({ ...formData, email: e.target.value });
    console.log(e.target.value);
  };
  const handleInputP = (event) => {
    setFormData({ ...formData, password: event.target.value });
    console.log(event.target.value);
  };
  // handle login page and redirect home page use navigate
const handleBtnClick=async(e)=>{
e.preventDefault();
// try all ok 
// catch any error
try{
    setShowLoader(true)
const api="https://dummyjson.com/auth/login";
//api calling time await
// const Response=await axios.post(api,{
//   username: formData?.email,
//   password: formdata?.password,
// });
const Response=await axios.post(api,{
    username: 'kminchelle',
    password: '0lelplR',
});
// destructure
const {data={}}=Response||{}
console.log(Response)
if(Response?.status==200){
    // store in local storage
    localStorage.setItem("user",JSON.stringify(data))
    navigate("/home-page")
setShowLoader(false);
}
}
catch(error){
setShowLoader(false);

console.error("error",error)
}
}
  return (
    <>
    {showLoader && <Loader/>}
      <div className="Login">
       
        <form className="formBox">
          <input
            type="email"
            placeholder="Email"
            value={formData?.email}
            name="Email"
            className="inputFormPass"
            onChange={(event) => handleInputE(event)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="inputFormPass "
            name="Password"
            value={formData?.password}
            onChange={(event) => handleInputP(event)}
          />
          <br />
          <Button
            type="submit"
            onClick={(e) => handleBtnClick(e)}
            className="inputFormBtn"
        disabled={
            formData?.email.length<6 || formData?.password<6
        }
          >
            Log In
          </Button>
        <p className="form-para">I forgot the Password</p>

        {/* Login form with correct enter email id and password */}
        
        {
            (formData?.email.length<6 || formData?.password.length<6) &&
          <p className="validSection">
            Enter correct valid {formData?.email.length<6 ? "Email":"Password"}
          </p>
        }
        </form>

      </div>
    </>
  );
}
export default LoginPage;
//  to deal with API
// 1.API -'https://dummyjson.com/auth/login'
// 2.Axios- to deal with api we need to axios
// 3.API is asynchronous and returns promise
// 4.Resolve promise
// a: .then(),
// b:  new Promise()
// c:  async/await
// 5. try/catch block
// 6. API http-method
// a. GET
// b. POST
// c. PUT/Patch
// d. DELETE
// 7.Response Status: 200 ok, 404 not Found
