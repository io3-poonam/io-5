import React, { useState } from "react";
import "./style.css"
import imageImage from"./assets/image/images.jpg"
import icon from"./assets/icon/arrow-down-sign-to-navigate.png"
import { Button } from "react-bootstrap";

function LoginPage(){
    const [formData,setFormData]=useState({
        email:"",
        password:""
    });
    const handleInputE=(e)=>{
        setFormData({ ...formData, email: e.target.value });
console.log(e.target.value )
    }
    const handleInputP=(event)=>{
        setFormData({ ...formData, password: event.target.value });
        console.log(event.target.value )
    }
    const handleBtnClick =()=>{
        console.log("click")
    }
    return(
<>
<div className="Login">
    <div className="firstCenterPoint">
        <img src={imageImage} alt="image"className="imageEmail"/>
        <p className="img_para">davidjohnson@gmail.com</p>
        <img src={icon} alt="icon"className="iconEmail"/>
    </div>
    <form className="formBox">
     <input type="email" placeholder="Email"
      value={formData?.email} name="Email"
      className="inputFormPass"
       onChange={(event)=>handleInputE(event)}
       /><br/>
       <input type="password" placeholder="Password" className="inputFormPass " name="Password" value={formData?.password}
        onChange={(event)=>handleInputP(event)}
        /><br/>
       <Button type="submit" onClick={(e)=>handleBtnClick(e)}
       className="inputFormBtn" disabled={formData?.email.length<6 || formData?.password.length<6} > Log In</Button>
    </form>
    <p className="form-para">I forgot the Password</p>
</div>
</>)
}
export default LoginPage;