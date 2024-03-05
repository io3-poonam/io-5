import React from "react";

import dummy from "../../Assets/images/dummy.png";
import "./style.css";
const OfferPage=(props)=>{
    const{offerImages}=props
    console.log(props)
    return(<>
<div className="imageFlex">
    {offerImages.map((imageOffer,index)=>{
        return(
<img className="imageOffer" key={index} src={imageOffer ?imageOffer:dummy} alt="offerImage"/>  

        )
    })}


</div>

</>)
}
export default OfferPage;