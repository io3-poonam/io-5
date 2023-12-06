import React from "react";
import "./style.css"
import imageImage from"./assets/image/images.jpg"
import icon from"./assets/icon/arrow-down-sign-to-navigate.png"

function LoginPage(){
    return(
<>
<div className="Login">
    <div className="firstCenterPoint">
        <img src={imageImage} alt="image"className="imageEmail"/>
        <p className="img_para">davidjohnson@gmail.com</p>
        <img src={icon} alt="icon"className="iconEmail"/>
    </div>
    <form className="formBox">
       <input type="password" placeholder="Password" className="inputFormPass"/><br/>
       <input type="submit" placeholder="Log In" className="inputFormBtn"/>
    </form>
    <p className="form-para">I forgot the Password</p>
</div>
</>)
}
export default LoginPage;