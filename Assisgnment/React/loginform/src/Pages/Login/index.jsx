import React from "react";
import "./style.css";
import HeaderSign from "../../SignUp/HeaderSign/Header";
import Desc from "../../SignUp/Desc/Description"
import LoginPageBox from "../../SignUp/LoginPageBox/LoginPage";
import FooterSide from "../../SignUp/FooterSide/FooterUpper";
import Footer from "../../SignUp/Footer/Footer";
import Header from "../../components2/Header";
function Login() {
  const currentPageShow="Login Page";

  return (
    <React.Fragment>
      <Header currentPage={currentPageShow}  />
      {/* <Footer /> */}
     <HeaderSign/>
     <Desc/>
     <LoginPageBox/>
     <FooterSide/>
     <Footer/>
    </React.Fragment>
  );
}

export default Login;
