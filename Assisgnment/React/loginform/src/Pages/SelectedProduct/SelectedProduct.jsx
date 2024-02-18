import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import { useLocation } from "react-router-dom";
const SelectedProduct=()=>{
    const location=useLocation();
    console.log("location",JSON.parse(location?.state) )
    return(<>
    <Header/>
    SelectedProduct
    <Footer/>
    </>)

}
export default SelectedProduct;