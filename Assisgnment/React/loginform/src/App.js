import React from "react";
// import Header from './component/Header/Header';
// import Description from './component/Desc/Description';
// import LoginPage from './component/LoginPageBox/LoginPage';
// import FooterSide from './component/FooterSide/FooterUpper';
// import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/index.jsx";
import About from "./Pages/About/index.jsx";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Login from "./Pages/Login";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Header/>
    <Description/>
    <LoginPage/>
    <FooterSide/>
    <Footer/> */}
    </React.Fragment>
    
  );
}
export default App;
