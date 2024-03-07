import React, { useEffect, useState } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTag } from "react-icons/fa";
import Loader from "../Loader/Loader";
import "./style.css";
import axios from "axios";
import Image from "../../Assets/images/dummy.png";
import star from "../../Assets/icons/star.svg";
import starOffer from "../../Assets/icons/fa_62673a.png";
import Delivery from "../../Assets/icons/delivery.svg";

import ReactImageMagnify from "react-image-magnify";
const SelectedProduct = () => {
  const location = useLocation();
  // const data = JSON.parse(location?.state);
  // const { id } = data || {};
  const {type,value}=location?.state||{};
  console.log(type,value)
  const [storeSingleProduct, setStoreSingleProduct] = useState({});
  const [isLoader, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(Image);
  useEffect(() => {
    singhProduct();
  }, [type,value]);
  const singhProduct = async () => {
    try {
      setLoading(true);
      let api="";
      if(type==="id"){
         api = `https://dummyjson.com/products/${value}`;
      }
      const resp = await axios.get(api);
      const { data, status } = resp || {};
  
      if (status === 200) {
        setStoreSingleProduct(data);
        setMainImage(data?.thumbnail);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.error("single product in something error", err);
    }
  };
  //image destructuring
  const { images = [] } = storeSingleProduct || {};
  // small image hover event
  const handleImageOver = (event, image) => {
    setMainImage(image);
  };
  /**
   * @description changing thumbnail (main image) on hover
   * @param{Object} event
   * @param{String}image
   */
  return (
    <>
    {/* cart show  */}
      <Header isCartEnabled={true} />
      {isLoader && <Loader />}
      <div className="selected_product_container">
        <div className="image_container">
          <div className="image_section">
            <div className="Vertical_image">
              {images.length > 0 &&
                images.map((image, index) =>
                  // small image hover event

                  {
                    return (
                      <img
                        key={index}
                        className="small__image"
                        src={image}
                        alt={image}
                        onMouseOver={(e) => handleImageOver(e, image)}
                      />
                    );
                  }
                )}
            </div>

            <div className="highLighted__image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "mainImage",
                    isFluidWidth: true,
                    src: mainImage,
                  },
                  largeImage: {
                    width: 1000,
                    src: mainImage,
                    height: 680,
                  },
                  enlargedImageContainerStyle:{
                    zIndex:"1500"
                  },
                  enlargedImageContainerDimensions:{
                    width:"100%",
                    height:"100%"
                  }
                }}
              />

              <div className="btn_SelectedProduct">
                <Button variant="danger">Add To Cart</Button>

                <Button variant="success">Buy Now </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_section_product">
          <h3>action </h3>
        {/* <h4 className="product-card__brand">{storeSingleProduct?.brand}</h4> */}
        <h5 className="product-card__desc">{storeSingleProduct?.description}</h5>

          {/* <h4 className="product-card__brand">{storeSingleProduct?.title}</h4> */}
          <h6 className="spePrice">Special price</h6>
          <h5 className="product-card-price">₹ {storeSingleProduct?.price} <span className="spanDis">10%off</span></h5>
          <Button variant="success" className="rating">{storeSingleProduct?.rating} <img className="starIcon" src={star} alt="star"/></Button><span className="ratingSpan">Rating  <img style={{    width: "3rem"}}src={starOffer} alt="starOffer"/></span>  
           <h6>Available offers</h6>
          <p className="cardText">
            <FaTag className="tag" /> <strong> Special Price Get</strong> extra
            ₹626 off (price inclusive of cashback/coupon)T&C
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong>Bank Offer</strong> 10% off on Federal Bank Credit Card
            Transactions, up to ₹1,250 on orders of ₹10,000 and aboveT&C
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong>Bank Offer </strong> 10% off on Federal Bank Credit Card EMI
            Transactions, up to ₹1,750 on orders of ₹10,000 and aboveT&C{" "}
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong> Bank Offer </strong> 10% off on DBS Bank Credit Card
            Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
          </p>
          <div className="delivery-Details">
          <p> <img src={Delivery} alt="Deliver to"/> Deliver to</p><p>Services</p><p> <Button className="iconBtnCash">₹ </Button> Cash on Delivery available</p>
          </div>
Poonam Maurya, 
street no 02, simran nagar, ropar, near Gillco valley sahibzada ajit singh academy, and govt school
HOME

Delivery by10 Mar, Sunday|Free₹40?
View Details


        </div>
      </div>
      <Footer />
    </>
  );
};
export default SelectedProduct;
