import axios from "axios";
import React, { useEffect, useState } from "react";
import DummyImage from "../../Assets/images/dummy.png";
import Loader from "../../Pages/Loader/Loader";
import "./style.css";
import { useNavigate } from "react-router-dom";
const AllProduct = (props) => {
  const { api = {} } = props || {};
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setLoading(true);
      // without api store
      axios.get(api).then((response) => {
        const { data: { products = [] } = {} } = response || {};
        setProductData(products);
        // if (products.length > 0) {
        setLoading(false);
        // }
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
      console.log("All product error in product Api", err);
    }
  }, []);
  const HandleProductClick = (event, productItems) => {
    navigate("/product", { state: { type: "id", value: productItems?.id } });
  };
  return (
    <>
      {isLoading && <Loader />}
      <h4 className="topDeals">Top Deals</h4>
      <div
        id="cardProductDetails"
        style={{ justifyContent: productData.length > 5 ? "start" : "center" }}
      >
        <div className="cardDetailsChild">
          {productData.map((productItems, index) => {
            return (
              <div
                key={index}
                className="cardDetails"
                onClick={(e) => HandleProductClick(e, productItems)}
              >
                <img
                  className="CardImage"
                  variant="top"
                  src={
                    productItems?.thumbnail
                      ? productItems?.thumbnail
                      : DummyImage
                  }
                  alt="product"
                />
                <h5 className="headingStrong">{productItems?.title} </h5>
                <strong>Incl in offers</strong>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AllProduct;
