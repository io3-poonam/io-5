import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
const Cart=()=>{
    const currentPageShow="Cart"
    return(<>
    <Header currentPage={currentPageShow}/>
    <Footer/>
    </>)
}
export default Cart;