import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
function About() {
  const currentPageShow="About Page";
  return (
    <React.Fragment>
      <Header currentPage={currentPageShow}  />

      <h1>About page</h1>
      <Footer />
    </React.Fragment>
  );
}

export default About;
