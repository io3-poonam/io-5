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
import ReactImageMagnify from "react-image-magnify";
const SelectedProduct = () => {
  const location = useLocation();
  const data = JSON.parse(location?.state);
  const { id } = data || {};
  const [storeSingleProduct, setStoreSingleProduct] = useState({});
  const [isLoader, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(Image);
  useEffect(() => {
    singhProduct();
  }, [id]);
  const singhProduct = async () => {
    try {
      setLoading(true);
      const api = `https://dummyjson.com/products/${id}`;
      const resp = await axios.get(api);
      const { data, status } = resp || {};
      console.log("d", data);
      if (status == 200) {
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
          <h4 className="product-card__brand">{location?.brand}</h4>
          <p className="product-card__description"></p>
          <p className="product-card__price"></p>
          <Button> </Button>Rating
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
            <strong>Bank Offer </strong>10% off on Federal Bank Credit Card EMI
            Transactions, up to ₹1,750 on orders of ₹10,000 and aboveT&C/p{" "}
          </p>
          <p className="cardText">
            <FaTag className="tag" />
            <strong> Bank Offer </strong>10% off on DBS Bank Credit Card
            Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SelectedProduct;
