import React, { useEffect, useState } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ProductCard from "../../components2/ProductCard";
import "./style.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Products() {
  const [allProduct, setAllProduct] = useState([]);
  const[showLoader,setLoader]=useState(false)
  // const [count, setCount] = useState(0);
  const [cartProductAdd, setCartProductAdd] = useState([]);


  const currentPageShow = "Product Page";
  useEffect(() => {
    productApiFetch();
  }, []);
  const productApiFetch = async () => {
    try{
      setLoader(true);
      const api = `https://dummyjson.com/products`;
    const dataApi = await axios.get(api);
    console.log("api", dataApi);
    const { data: { products = [] } = {} } = dataApi || {};
    console.log("pro", products);
    setAllProduct(products);
    setLoader(false)}
    catch(error){
setLoader(false);
    }
  
  };
  // setCount=count + 1
  const handleAddCartClick=(selectProduct)=>{
    console.log("parent",selectProduct)
          //  setCount(count + 1)
           setCartProductAdd([...cartProductAdd,selectProduct])
        }
        console.log("cartProductAdd",cartProductAdd);
  return (
    <React.Fragment>
      {/* CartCounting= { cartProductAdd.length}  cart product add in without count state*/}
      <Header currentPage={currentPageShow} CartCounting= { cartProductAdd.length} onShowCartAdd={cartProductAdd} />
      <div className="product-container">
         {/* show Loader when api is hit */}
         { showLoader &&<Loader/>}
         {/* don't show Loader when api is hit */}
         {!showLoader&&
         allProduct.map((items, index) => {
          return (<ProductCard price={items?.price}
          description={items?.description}
          title={items?.title}
          brand={items?.brand}
          thumbnail={items?.thumbnail}
          category={items?.category}
          {...items}
          onCartClick={handleAddCartClick}

           />);
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
