import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import Loader from "../Loader/Loader";
import { Button } from "react-bootstrap";
import { FaTag } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import "./style.css";
import Image from "../../Assets/images/dummy.png";
import star from "../../Assets/icons/star.svg";
import starOffer from "../../Assets/icons/fa_62673a.png";
import Delivery from"../../Assets/icons/delivery.svg";
import OfferImage4 from "../../Assets/images/offerImage4.webp";

import ReactImageMagnify from "react-image-magnify";
const SelectedProduct = () => {
  const location = useLocation();
  // const data = JSON.parse(location?.state);
  // const { id } = data || {};
  const { type, value } = location?.state || {};
  console.log(type, value);
  const [storeSingleProduct, setStoreSingleProduct] = useState({});
  const [isLoader, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(Image);
  const [moreOffersShow, setMoreOffersShow] = useState(false);

  useEffect(() => {
    singhProduct();
  }, [type, value]);
  const singhProduct = async () => {
    try {
      setLoading(true);
      let api = "";
      if (type === "id") {
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
  let del = storeSingleProduct.price;
  del = Number(del) + Number(Math.random() * 10).toFixed(0);
  /**
   * @description changing thumbnail (main image) on hover
   * @param{Object} event
   * @param{String}image
   */
  // offer details
  const HandleMoreOffers = () => {
    setMoreOffersShow(true);
    console.log(".");
  };
  const monthStr = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weeksStr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date().getDate();
  const month = new Date().getMonth();
  const weeks = new Date().getDay();
  date = date + 7;

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
                  enlargedImageContainerStyle: {
                    zIndex: "1500",
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              />

              <div className="btn_SelectedProduct">
                <Button className="BtnButton" variant="warning">
                  <BsCartFill className="btnIcon" /> Add To Cart
                </Button>

                <Button className="BtnButton" variant="success">
                  {" "}
                  <BsCartFill className="btnIcon" /> Buy Now{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_section_product">
          <h4 className="product-card__brand">{storeSingleProduct?.title}</h4>
          {/* <h4 className="product-card__brand">{storeSingleProduct?.brand}</h4> */}
          <h5 className="product-card__desc">
            {storeSingleProduct?.description}
          </h5>
          <h6 className="spePrice">Special price</h6>
          <h5 className="product-card-price">
            ₹ {storeSingleProduct?.price}
            <del>₹ {del}</del>
            <span className="spanDis">
              {Number(Math.random() * 10).toFixed(0)}% off{" "}
            </span>
          </h5>
          <Button variant="success" className="rating">
            {storeSingleProduct?.rating}{" "}
            <img className="starIcon" src={star} alt="star" />
          </Button>
          <span className="ratingSpan">
            {" "}
            {Number(Math.random() * 1000).toFixed(0)} Rating{" "}
            {Number(Math.random() * 100).toFixed(0)} review{" "}
            <img style={{ width: "3rem" }} src={starOffer} alt="starOffer" />
          </span>
          <h6>Available offers</h6>
          <p className="cardText">
            <FaTag className="tag" /> <strong> Special Price Get</strong> extra
            ₹ {Number(Math.random() * 10).toFixed(0)} off{" "}
            {Number(Math.random() * 10).toFixed(0)} items (price inclusive of
            cashback/coupon)T&C
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong>Bank Offer</strong> {Number(Math.random() * 10).toFixed(0)}{" "}
            % off on Federal Bank Credit Card Transactions, up to ₹{" "}
            {Number(Math.random() * 1000).toFixed(0)} on orders of ₹
            {Number(Math.random() * 10000).toFixed(0)} and aboveT&C
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong>Bank Offer </strong> {Number(Math.random() * 10).toFixed(0)}{" "}
            % off on PNB Bank Credit Card EMI Transactions, up to ₹
            {Number(Math.random() * 1000).toFixed(0)} on orders of ₹
            {Number(Math.random() * 10000).toFixed(0)} and aboveT&C{" "}
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong> Bank Offer </strong>{" "}
            {Number(Math.random() * 10).toFixed(0)} % off on DBS Bank Credit
            Card Transactions, up to ₹ {Number(Math.random() * 1000).toFixed(0)}{" "}
            on orders of ₹ {Number(Math.random() * 10000).toFixed(0)} and
            aboveT&C
          </p>
          <p>
            Know More Offers <FaCaretDown onClick={(e) => HandleMoreOffers(e)} />
          </p>
          {moreOffersShow ? (
            <div>
              <p className="cardText">
                <FaTag className="tag" />
                <strong>Bank Offer</strong>{" "}
                {Number(Math.random() * 10).toFixed(0)} % off on Axis Bank
                Credit Card Transactions, up to ₹{" "}
                {Number(Math.random() * 1000).toFixed(0)} on orders of ₹
                {Number(Math.random() * 10000).toFixed(0)} and aboveT&C
              </p>
              <p className="cardText">
                <FaTag className="tag" />
                <strong>Bank Offer </strong>{" "}
                {Number(Math.random() * 10).toFixed(0)} % off on BOI Bank Credit
                Card EMI Transactions, up to ₹
                {Number(Math.random() * 1000).toFixed(0)} on orders of ₹
                {Number(Math.random() * 10000).toFixed(0)} and aboveT&C{" "}
              </p>
              <p className="cardText">
                <FaTag className="tag" />
                <strong> Bank Offer </strong>{" "}
                {Number(Math.random() * 10).toFixed(0)} % off on Kotak Mahindra
                Bank Credit Card Transactions, up to ₹{" "}
                {Number(Math.random() * 1000).toFixed(0)} on orders of ₹{" "}
                {Number(Math.random() * 10000).toFixed(0)} and aboveT&C
              </p>
            </div>
          ) : null}
          <div className="delivery-Details">
            <p>
              {" "}
              <img src={Delivery} alt="Deliver to" /> Deliver to
            </p>
            <p>Services</p>
            <p>
              {" "}
              <Button className="iconBtnCash">₹ </Button> Cash on Delivery
              available
            </p>
          </div>
          <input
            type="text"
            className="SingleProductInput"
            placeholder="Poonam Maurya, 
street no 02, simran nagar, ropar, near Gillco valley sahibzada ajit singh academy, and govt school"
          ></input>
          
          <p>
            Delivery by {date} {monthStr.at(month)},{weeksStr.at(weeks)} | Free
            ₹<del>40</del>
          </p>
          View Details
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SelectedProduct;
