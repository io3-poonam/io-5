import React from "react";
import LoginPage from"../../components2/LoginPageBox/LoginPage";
import Header from "../../components2/Header";
function Login() {
  return (
    <React.Fragment>
      <Header currentPageShow="Login Page"  />
     <LoginPage/>
    </React.Fragment>
  );
}

export default Login;
