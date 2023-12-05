import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ProductCard from "../../components2/ProductCard";
import "./style.css";

function Products() {
  return (
    <React.Fragment>
      <Header />
      <div className="product-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
