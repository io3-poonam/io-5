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
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate=useNavigate();
  const yearFooter = new Date().getFullYear();
  const HandleABPage=(event)=>{
    navigate("/about-us")

  }
  const HandleCOPage=(e)=>{
    navigate("/contact-us")

  }
  return (
    <>
 

 <footer className="page-footer font-small blue pt-4 bg-dark text-light" >
    <div className="container  text-md-left text-light">
        <div className="row ">
           <div className="col ">
                <p className="text-uppercase mb-0">About</p>
                <ul className="list-unstyled  ">
                <li > <a className="text-light list-none  " onClick={(e)=>HandleABPage(e)}>About Us</a></li> 
              <li > <a className="text-light list-none "onClick={(eve)=>HandleCOPage(eve)}>Careers Us </a></li> 
              <li > <a className="text-light list-none " href="#!">Flipkart Stories </a></li> 
              <li > <a className="text-light list-none " href="#!">Press  </a></li>
              <li > <a className="text-light list-none " href="#!">Corporate Information </a></li>
                </ul>
            </div>
            <div className="col">
                <p className="text-uppercase mb-0">GROUP COMPANIES</p>
                <ul className="list-unstyled ">
         
                <li > <a className="text-light list-none " href="#!">Myntra</a></li> 
              <li > <a className="text-light list-none " href="#!">Flipkart Wholesale</a></li> 
              <li > <a className="text-light list-none " href="#!">Cleartrip </a></li> 
              <li > <a className="text-light list-none " href="#!">Shopsy  </a></li>
                </ul>
            </div>
            <div className="col">
                <p className="text-uppercase mb-0 ">HELP</p>
                <ul className="list-unstyled ">
                <li > <a className="text-light list-none " href="#!">Payment</a></li> 
              <li > <a className="text-light list-none " href="#!">Shipping </a></li> 
              <li > <a className="text-light list-none " href="#!">Cancellation </a></li> 
              <li > <a className="text-light list-none " href="#!">FAQ  </a></li>
              <li > <a className="text-light list-none " href="#!">Report Infringemen </a></li>
                </ul>
            </div>
            <div className="col">
                <p className="text-uppercase mb-0  ">CONSUMER POLICY</p>
                <ul className="list-unstyled ">
                <li > <a className="text-light list-none " href="#!">Cancellation & Returns</a></li> 
              <li > <a className="text-light list-none " href="#!">Terms of Use </a></li> 
              <li > <a className="text-light list-none " href="#!">Security </a></li> 
              <li > <a className="text-light list-none " href="#!">Sitemap </a></li>
              <li > <a className="text-light list-none " href="#!">Grievance  </a></li>
              <li > <a className="text-light list-none " href="#!">Grievance Redressal  </a></li>
              <li > <a className="text-light list-none " href="#!">EPR Compliance  </a></li>
                </ul>
            </div>
            <div className=" row col-md-6 mt-md-0 mt-3 ">
          <div className=" col">
          <p className="heading">Mail us:</p>
          <p className="">Flipkart internet private limited, Building Aysssa, begonia & Clove Embassy Tech village Outer Ring Road, Devarabessanhalli Village, Bengaluru,560103, Karnataka, India</p>
          <p className="heading">Social:</p>
          <img className="imageSocialIcon" src={Facebook} alt={Facebook}/>
          <img className="imageSocialIcon" src={Cross} alt={Cross}/>
          <img className="imageSocialIcon" src={Youtube} alt={Youtube}/>
          </div>
          <div className="col">
          <p  className="heading">Registered Office address: us:</p>
<p  className="FooterPara">Flipkart internet private limited, Building Aysssa, begonia & Clove Embassy Tech village Outer Ring Road, Devarabessanhalli Village, Bengaluru,560103, Karnataka, India CIN: U51109KA2012PTC066107 <br/> Telephone: <span className="span">044-45614700</span> </p></div>
        </div>
        </div>
       
    </div>
    <hr className="clearfix w-100  pb-0"/> 
    <div 
    className="Footer d-flex flex-row pt-0 bg-dark color-light align-items-center  justify-content-evenly m-auto row " 
     >
      <div className="col-md-5 mt-md-0 mt-3 ulListDiv">
        <ul className="ulTag d-flex flex-row ">
          <img  className="imageFooterBar" src={sellImAge} alt="sellImAge" />
          <li className="listItems">Become a Seller</li>
          <img className="imageFooterBar"  src={advertise} alt="advertise" />
          <li className="listItems">Advertise</li>
          <img className="imageFooterBar"  src={giftCard} alt="giftCard" />
          <li className="listItems">Gift Cards</li>
          <img className="imageFooterBar"  src={HelpCenter} alt="HelpCenter" />
          <li className="listItems">Help Center</li>
        </ul></div>
        <div className="footer-copyright text-center py-3 col-md-3 mt-md-0 mt-3">© {yearFooter} Infoxygens Ltd  Registered in India:
        <a href="https://mdbootstrap.com/"></a>
    </div>
    <div className="col-md-4 mt-md-0 mt-3">
          <FooterImage />
        </div>
       
    
      </div> 
    

</footer>

 {/* <div className="footerSideBar">
        <ul className="ulTagFooterSide">
          <li className="liItemsFooterSide">
            ABOUT
            <ul className="ulFooterSide">
              <li Contact Us</li>
              <li About Us</li>
              <li Careers Us</li>
              <li Flipkart Stories</li>
              <li Press </li>
              <li Corporate Information</li>
            </ul>
          </li>

          <li className="liItemsFooterSide">
          <ul className="ulFooterSide">
              
              
            </ul></li>
          <li className="liItemsFooterSide">
          <ul className="ulFooterSide">
              <li </li>
              <li </li>
              <li </li>
              <li </li>
              <li t </li>
            </ul></li>
          <li className="liItemsFooterSide">
          <ul className="ulFooterSide">
            
            </ul></li>
        </ul>
       
      </div> */}
    
    </>
  );
}
export default Footer;
