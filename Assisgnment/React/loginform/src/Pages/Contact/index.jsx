import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ContactForm from "../../components2/ContactForm";

function Contact() {
  return (
    <React.Fragment>
      <Header currentPageShow="Contact Page" />

      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
