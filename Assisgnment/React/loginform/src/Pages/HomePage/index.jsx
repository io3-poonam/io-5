import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ImageSliders from "../../components2/ImageSliders";

function HomePage() {
  const currentPageShow="Home Page";

  return (
    <React.Fragment>
      <Header currentPage={currentPageShow}  />
      <ImageSliders />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
