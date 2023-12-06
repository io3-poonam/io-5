import React from "react";
import "./style.css";
import HeaderSign from "../../SignUp/HeaderSign/Header";
import Desc from "../../SignUp/Desc/Description"
import LoginPageBox from "../../SignUp/LoginPageBox/LoginPage";
import FooterSide from "../../SignUp/FooterSide/FooterUpper";
import Footer from "../../SignUp/Footer/Footer";


function Login() {

  return (
    <React.Fragment>
     <HeaderSign/>
     <Desc/>
     <LoginPageBox/>
     <FooterSide/>
     <Footer/>
    </React.Fragment>
  );
}

export default Login;
