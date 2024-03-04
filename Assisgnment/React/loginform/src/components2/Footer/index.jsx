import React from "react";
import "./style.css";
import FooterImage from "../../imageArray/footerImage";
import sellImAge from "../../Assets/icons/sell-image.svg";
import advertise from "../../Assets/icons/advertise-image.svg";
import giftCard from "../../Assets/icons/gift-cards-image.svg";
import HelpCenter from "../../Assets/icons/help-centre-image.svg";
import Facebook from "../../Assets/icons/fb.svg";
import Cross from "../../Assets/icons/cross.svg";

import Youtube from "../../Assets/icons/YoutubeLogo.svg";


function Footer() {
  const yearFooter = new Date().getFullYear();
  return (
    <>
      <div className="footerSideBar">
        <ul className="ulTagFooterSide">
          <li className="liItemsFooterSide">
            ABOUT
            <ul className="ulFooterSide">
              <li className="liFooterSide">Contact Us</li>
              <li className="liFooterSide">About Us</li>{" "}
              <li className="liFooterSide">Careers Us</li>{" "}
              <li className="liFooterSide">Flipkart Stories</li>{" "}
              <li className="liFooterSide">Press </li>
              <li className="liFooterSide">Corporate Information</li>
            </ul>
          </li>

          <li className="liItemsFooterSide">GROUP COMPANIES
          <ul className="ulFooterSide">
              <li className="liFooterSide">Myntra</li>
              <li className="liFooterSide">Flipkart Wholesale</li>
              <li className="liFooterSide">Cleartrip</li>
              <li className="liFooterSide">Shopsy</li>
              
            </ul></li>
          <li className="liItemsFooterSide">HELP
          <ul className="ulFooterSide">
              <li className="liFooterSide">Payment</li>
              <li className="liFooterSide">Shipping</li>
              <li className="liFooterSide">Cancellation</li>
              <li className="liFooterSide">FAQ</li>
              <li className="liFooterSide">Report Infringement </li>
            </ul></li>
          <li className="liItemsFooterSide">CONSUMER POLICY
          <ul className="ulFooterSide">
              <li className="liFooterSide">Cancellation & Returns</li>
              <li className="liFooterSide">Terms of Use</li>{" "}
              <li className="liFooterSide">Security</li>{" "}
              <li className="liFooterSide">Privacy</li>{" "}
              <li className="liFooterSide">Sitemap </li>
              <li className="liFooterSide">Grievance <></></li>
              <li className="liFooterSide">Grievance Redressal</li>
              <li className="liFooterSide">EPR Compliance</li>
            </ul></li>
        </ul>
        <div className="footerRightSideAddress">
          <div className="footerAddress">
          <h6 className="heading">Mail us:</h6>
          <p className="FooterPara">Flipkart internet private limited, Building Aysssa, begonia & Clove Embassy Tech village Outer Ring Road, Devarabessanhalli Village, Bengaluru,560103, Karnataka, India</p>
          <h6 className="heading">Social:</h6>
          <img className="imageSocialIcon" src={Facebook} alt={Facebook}/>
          <img className="imageSocialIcon" src={Cross} alt={Cross}/>
          <img className="imageSocialIcon" src={Youtube} alt={Youtube}/>
          </div>
          <div>
          <h6  className="heading">Registered Office address: us:</h6>
<p  className="FooterPara">Flipkart internet private limited, Building Aysssa, begonia & Clove Embassy Tech village Outer Ring Road, Devarabessanhalli Village, Bengaluru,560103, Karnataka, India CIN: U51109KA2012PTC066107 <br/> Telephone: <span className="span">044-45614700</span> </p></div>
        </div>
      </div>
      <div className="Footer">
        <ul className="ulTag">
          <img  className="imageFooterBar" src={sellImAge} alt="sellImAge" />{" "}
          <li className="listItems">Become a Seller</li>
          <img className="imageFooterBar"  src={advertise} alt="advertise" />{" "}
          <li className="listItems">Advertise</li>
          <img className="imageFooterBar"  src={giftCard} alt="giftCard" />{" "}
          <li className="listItems">Gift Cards</li>
          <img className="imageFooterBar"  src={HelpCenter} alt="HelpCenter" />{" "}
          <li className="listItems">Help Center</li>
        </ul>
        <div className="para-footer">
          &copy; Infoxygens Ltd {yearFooter} Registered in India
        </div>
        <div>
          <FooterImage />
        </div>
      </div>
    </>
  );
}
export default Footer;
