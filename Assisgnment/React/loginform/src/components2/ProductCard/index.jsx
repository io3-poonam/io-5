import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";

const ProductCard = (props) => {
    // allready add in cart
  const [addInCart,setAddInCart]=useState(false)
  const { price, description, title, brand, thumbnail, category, onCartClick } =
    props || {};
  const HandleCartAddBtn = (e, props) => {
    console.log("child ",props);
    onCartClick(props);
    // allready add in cart
    setAddInCart(true)
  };
  return (
    <>
      <div className="product-card" href="#dolce-gabbana-cropped">
        <img className="product-card__image" src={thumbnail} />
        <p className="product-card__brand">{title}</p>
        <p className="product-card__brand">{category}</p>

        <p className="product-card__brand">{brand}</p>

        <p className="product-card__description"  >{description.title}{description} </p>
        <p className="product-card__price">$ {price}</p>
        <div className="btn_product">
    {/* already add in cart */}

          {!addInCart?(
          <Button onClick={(e) => HandleCartAddBtn(e, props)}>
            Add To Cart
          </Button>
          ):(
          <p>Already in cart</p>

          )}
          <Button>Buy Now </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
