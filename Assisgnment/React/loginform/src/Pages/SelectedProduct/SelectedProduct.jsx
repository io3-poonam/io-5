import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTag } from "react-icons/fa";
import "./style.css"
const SelectedProduct=()=>{
    const location=useLocation();
    console.log("......",JSON.parse(location?.state))
    // const location=useLocation();
    // console.log("location",JSON.parse(location?.state) )
    return(<>
    <Header   isCartEnabled={true}/>
      <div
          className="selected_product_container"
          style={{ display: "flex", flexDirection: "row", width: "98%" }}
        >
          <div className="image_container">
            <div className="image_section">
          <div className="Vertical_image">
              <img
                className="small__image"
                variant="top"
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/m/y/-original-imagrrxads6t9hr3.jpeg?q=70&crop=false"
                alt=""
              />
                  <img
                className="small__image"
                variant="top"
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/t/s/-original-imagrggwx2mjftj7.jpeg?q=70&crop=false"
                alt=""
              />    <img
              className="small__image"
              variant="top"
              src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/7/f/-original-imagrggwnkdrfdfs.jpeg?q=70&crop=false"
              alt=""
            />    <img
            className="small__image"
            variant="top"
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/k/d/-original-imagrggwvwyhuzh9.jpeg?q=70&crop=false"
            alt=""
          />    <img
          className="small__image"
          variant="top"
          src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/y/8/-original-imagrsfapauvzsvz.jpeg?q=70&crop=false"
          alt=""
        />    <img
        className="small__image"
        variant="top"
        src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/e/k/v/-original-imagrsfabrn83kyf.jpeg?q=70&crop=false"
        alt=""
      />
              </div>
            <div  className="highLighted__image">
              <img
               
                variant="top"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70&crop=false"
                alt=""
              />
               <Button
                  variant="light"
                  className="product-card__btn-wishlist"
                >
                  <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
                      strokeWidth="2"
                    />
                  </svg>
                </Button>
                <div className="btn_product">
                  <Button variant="danger">Add To Cart</Button>

                  <Button variant="success">Buy Now </Button>
                </div>
             </div>
              
                </div>
                
           
          </div>
          <div className="detail_section_product">
            <h4 className="product-card__brand">
                    </h4>
            <p className="product-card__description"></p>
            <p className="product-card__price"></p>
            <Button>  </Button>Rating
            <p>$</p>
            <Card.Title>Available offers</Card.Title>
            <p className="cardText">
              <FaTag className="tag" /> <strong>Special PriceGet</strong>extra
              ₹626 off (price inclusive of cashback/coupon)T&C
            </p>
            <p className="cardText">
              <FaTag className="tag" />
              <strong>Bank Offer</strong>10% off on Federal Bank Credit Card
              Transactions, up to ₹1,250 on orders of ₹10,000 and aboveT&C
            </p>
            <p className="cardText">
              <FaTag className="tag" />
              <strong>Bank Offer </strong>10% off on Federal Bank Credit Card
              EMI Transactions, up to ₹1,750 on orders of ₹10,000 and
              aboveT&C/p{" "}
            </p>
            <p className="cardText">
              <FaTag className="tag" />
              <strong> Bank Offer </strong>10% off on DBS Bank Credit Card
              Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
            </p>
          </div>
        </div>
    <Footer/>
    </>)

}
export default SelectedProduct;