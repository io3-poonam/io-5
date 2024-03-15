import React, { useEffect,useState } from "react";
import Header from "../../components2/Header";
import Footer1 from "../../components2/footer1/Footer1";
// import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
const Cart = (props) => {
  // const{cartProductAdd}=props
  const [total,setTotal]=useState()
  // const location = useLocation();
  // console.log("props", props, "location", location);

  // const localStorageData= (JSON.parse(localStorage.getItem("cardDataItems")));
  const localStorageData = localStorage.getItem("cardDataItems");
  // console.log("localStorageData", JSON.parse(localStorageData));
// not under stand
const selectedLocalCartData=localStorageData &&JSON?.parse(localStorageData?localStorageData:[])
// console.log("selectedLocalCartData", selectedLocalCartData,location);
// amount
  useEffect(()=>{let totalAmount=0;
    selectedLocalCartData.forEach((product)=>{
      totalAmount=totalAmount+Number(product.price);
    })
    setTotal(totalAmount)},[])
  

  const Discount=(Math.random()*10).toFixed(0);
  const coupon=(Math.random()*10).toFixed(0);
  const Delivery=40;
  const totalPrice=Number(total-Discount-coupon+Delivery)
  return (
    <>
      <Header />
      
          <div
            className="product-cart-details"
          >
              <div  className="product-card-left-side">
            {JSON.parse(localStorageData).map((itemsSelected, index) => {
        return (
        
          <div className="product-cart" >
            <div>
        <img className="product-cart__image" src={itemsSelected?.thumbnail} alt="thumbnail"/></div> <div>
        <p className="product-cart__brand">{itemsSelected?.title}</p>
        <p className="product-cart__brand">{itemsSelected?.category}</p>

        <p className="product-cart__brand">{itemsSelected?.brand}</p>

        <p className="product-cart__description" title={itemsSelected?.description} >{itemsSelected?.description} </p>
        <p className="product-cart__price">$ {itemsSelected?.price}</p>
        <button className="product-cart__btn-wishlist">
          <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="btn_product">

          <Button variant="light" >
          Save to Later
          </Button>
     
          <Button variant="light">Remove </Button>
        </div>
      </div>
        </div>
        );
      })}
      <div className="product-cart_button">
          <Button className="ButtonBTN">Place Order</Button>
        </div>
        </div>
        
       <div className="product-card-right-side">
              <Card>
                <h5 className="AmountDetailsHeading">PRICE DETAILS</h5>
                <hr/>
                <div className="card_price_details">
{/* selectedLocalCartData iterms details */}
                <Card.Text  className="paraPriceDetails">Price ({selectedLocalCartData.length} items)</Card.Text>
             
                <Card.Text className="amountDetails" >₹{total}</Card.Text>   </div>
                <div className="card_price_details">
                <Card.Text className="paraPriceDetails">Discount</Card.Text>
                <Card.Text className="amountDetails less" >− ₹{Discount}</Card.Text></div>
                <div className="card_price_details">
                <Card.Text className="paraPriceDetails">Coupons for you</Card.Text>
                <Card.Text className="amountDetails less" >− ₹{coupon}</Card.Text></div>
                <div className="card_price_details">
                <Card.Text className="paraPriceDetails">Delivery Charges</Card.Text>
                <Card.Text className="amountDetails" ><del>₹370</del> ₹{Delivery}</Card.Text></div>
                <div className="card_price_details">
                <Card.Text className="paraPriceDetails PAmountDetails">Total Amount</Card.Text>
                <Card.Text className="amountDetails" >₹{totalPrice}</Card.Text></div>
                <Card.Text className="SaveAmount">You will save ₹{Discount} on this order</Card.Text>
              </Card>
            </div>
          </div>

      <Footer1 />
    </>
  );
};
export default Cart;

