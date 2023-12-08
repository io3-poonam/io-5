import React, { useEffect, useState } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ProductCard from "../../components2/ProductCard";
import "./style.css";
import axios from "axios";
import Loader from "../Loader/Loader";
function Products() {
  const [allProduct, setAllProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  const currentPageShow = "Product Page";
  useEffect(() => {
    productApiFetch();
  }, []);
  const productApiFetch = async () => {
    
    try{
      setLoader(true)
      const api = `https://dummyjson.com/products`;
    const dataApi = await axios.get(api);
    console.log("api", dataApi);
    const { data: { products = [] } = {} } = dataApi || {};
    console.log("pro", products);
    setAllProduct(products);
    if(dataApi?.status==200)
    setLoader(false)
    }
    catch(error){
      setLoader(false)
    }
  };
  return (
    <React.Fragment>
      <Header currentPage={currentPageShow} />
      <div className="product-container">
        {loader && <Loader/>}
        {allProduct.map((items, index) => {
          return <ProductCard price={items?.price}
          description={items?.description}
          title={items?.title}
          brand={items?.brand}
          thumbnail={items?.thumbnail}
          category={items?.category}
{...items}


           />;
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
