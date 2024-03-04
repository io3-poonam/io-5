import axios from "axios";
import React, { useEffect, useState } from "react";
import DummyImage from "../../Assets/images/dummy.png"
import Card from 'react-bootstrap/Card';
import Loader from "../../Pages/Loader/Loader";
import "./style.css";
const AllProduct =()=>{
    const [productData,setProductData]=useState([])
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        try{
            setLoading(true)
        const api=`https://dummyjson.com/products`;
        axios.get(api).then((response)=>{
            const {data:{products=[]}={}}=response||{}
            setProductData(products)

        console.log("products",products)
        if(products.length>0){
            setLoading(false)
        }
        })}catch(err){
        setLoading(false)
        console.log("All product error in product Api",err)
        }
        
    },[])
    console.log(productData
        ,"...")
    return(<>
{isLoading && <Loader/>} 
<h4>Top Deals</h4>
<div id="cardProductDetails">
{productData.map((productItems,index)=>{
    return(
       
        <Card  key={index} className="card">
        <Card.Img className="CardImage" variant="top" src={productItems?.thumbnail ? productItems?.thumbnail :DummyImage} alt="product" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <strong>Min 50-80% off</strong>
          </Card.Text>
      
        </Card.Body>
      </Card>
    )
})}
</div>
   
   </>)

}
export default AllProduct;