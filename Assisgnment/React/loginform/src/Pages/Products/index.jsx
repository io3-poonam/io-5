import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ProductCard from "../../components2/ProductCard";
import PageNotFound from "../Error/Page404";
import "./style.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Products() {
  const [allProduct, setAllProduct] = useState([]);
  const [showLoader, setLoader] = useState(false);
  const [cartProductAdd, setCartProductAdd] = useState([]);
  const location=useLocation()
  console.log(location?.state)
  const{type="",value=""}=location?.state||{}
  useEffect(() => {
    productApiFetch();
  }, [type,value]);
  const productApiFetch = async () => {
    try {
      setLoader(true);
      let api="";
      if(type==="search"){
        api = `https://dummyjson.com/products/search?q=${value}`;
      }else{
        api = `https://dummyjson.com/products`;
      }
      const dataApi = await axios.get(api);
      const { data: { products = [] } = {} } = dataApi || {};
      setAllProduct(products);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const handleAddCartClick = (selectProduct,previousData) => {
    // console.log("parent", selectProduct);
    setCartProductAdd([...cartProductAdd, selectProduct]);
    // current and previous data show
    if(previousData){
      localStorage.setItem("cardDataItems",JSON.stringify([...previousData, selectProduct]));
    }
    else{
      localStorage.setItem("cardDataItems",JSON.stringify([...cartProductAdd, selectProduct])); 
    }
  };

  return (
    <React.Fragment>
      {/* CartCounting= { cartProductAdd.length}  cart product add in without count state*/}
      <Header
    /* cart show  */
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
              <ProductCard key={index}
                price={items?.price}
                description={items?.description}
                title={items?.title}
                brand={items?.brand}
                thumbnail={items?.thumbnail?(items?.thumbnail):Image}
                category={items?.category}
                {...items}
                onCartClick={handleAddCartClick}
              />
            );
          })}
      </div>
      {allProduct.length==0 && 
    <PageNotFound/>  }
      <Footer />
    </React.Fragment>
  );
}

export default Products;
