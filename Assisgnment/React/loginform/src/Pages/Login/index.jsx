import React from "react";
import LoginPage from"../../components2/LoginPageBox/LoginPage";
import Header from "../../components2/Header";
function Login() {
  const currentPageShow="Login Page";

  return (
    <React.Fragment>
      <Header currentPage={currentPageShow}  />
     <LoginPage/>
    </React.Fragment>
  );
}

export default Login;
