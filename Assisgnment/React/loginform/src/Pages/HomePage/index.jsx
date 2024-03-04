import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ImageSliders from "../../components2/ImageSliders";
import OfferPage from "../../components2/offerPage/Offer";
import "./style.css"
import AllProduct from "../../components2/AllProduct/AllProduct";
function HomePage() {
  return (
    <div>
    <div className="HomePage">
      <Header currentPageShow="Home Page"  />
      </div>
      <div className="centerHomePage">
      <ImageSliders />
      <OfferPage/>
      <AllProduct/>
      </div>
      <Footer />
      </div>
  );
}

export default HomePage;
