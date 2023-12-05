import React from "react";
import "./style.css";

function Footer() {
  const yearFooter=new Date().getFullYear();
  return (
    <div className="Footer">
      <p className="para-footer">
        &copy; Infoxygens Ltd {yearFooter} Registered in India
      </p>
    </div>
  );
}
export default Footer;
