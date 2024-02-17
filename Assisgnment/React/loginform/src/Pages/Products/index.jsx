import React, { useEffect, useState } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ProductCard from "../../components2/ProductCard";
import "./style.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Products() {
  const [allProduct, setAllProduct] = useState([]);
  const [showLoader, setLoader] = useState(false);
  const [cartProductAdd, setCartProductAdd] = useState([]);
  useEffect(() => {
    productApiFetch();
  }, []);
  const productApiFetch = async () => {
    try {
      setLoader(true);
      const api = `https://dummyjson.com/products`;
      const dataApi = await axios.get(api);
      console.log("api", dataApi);
      const { data: { products = [] } = {} } = dataApi || {};
      console.log("pro", products);
      setAllProduct(products);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const handleAddCartClick = (selectProduct,previousData) => {
    console.log("parent", selectProduct);
    setCartProductAdd([...cartProductAdd, selectProduct]);
    // current and previous data show
    if(previousData){
      localStorage.setItem("cardDataItems",JSON.stringify([...previousData, selectProduct]));
    }
    else{
      localStorage.setItem("cardDataItems",JSON.stringify([...cartProductAdd, selectProduct]));
      
    }
  };
  console.log("cartProductAdd", cartProductAdd);
  return (
    <React.Fragment>
      {/* CartCounting= { cartProductAdd.length}  cart product add in without count state*/}
      <Header
        isCartEnabled={true}
        CartCounting={cartProductAdd.length}
        onShowCartAdd={cartProductAdd}
      />
      <div className="product-container">
        {/* show Loader when api is hit */}
        {showLoader && <Loader />}
        {/* don't show Loader when api is hit */}
        {!showLoader &&
          allProduct.map((items, index) => {
            return (
              <ProductCard
                price={items?.price}
                description={items?.description}
                title={items?.title}
                brand={items?.brand}
                thumbnail={items?.thumbnail}
                category={items?.category}
                {...items}
                onCartClick={handleAddCartClick}
              />
            );
          })}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
