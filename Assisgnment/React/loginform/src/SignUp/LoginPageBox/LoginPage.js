import React, { useState } from "react";
import "./style.css"
import imageImage from"./assets/image/images.jpg"
import icon from"./assets/icon/arrow-down-sign-to-navigate.png"

function LoginPage(){
    // const [formData,setFormData]=useState({
    //     Email:"",
    //     Password:""
    // });
    // const handleInputE=(e)=>{
    //     setFormData({ ...formData, Email: e.target.value });

    // }
    // const handleInputP=(e)=>{
    //     setFormData({ ...formData, password: e.target.value });

    // }
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
    //   value={formData?.Email} name={Email} 
      className="inputFormPass"
    //    onChange={(event)=>handleInputE(event)}
       /><br/>
       <input type="password" placeholder="Password" className="inputFormPass "
        // onChange={(event)=>handleInputP(event)}
        /><br/>
       <input type="submit" placeholder="Log In" className="inputFormBtn"/>
    </form>
    <p className="form-para">I forgot the Password</p>
</div>
</>)
}
export default LoginPage;