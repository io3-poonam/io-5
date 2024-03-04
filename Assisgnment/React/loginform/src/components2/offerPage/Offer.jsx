import React from "react";
import OfferImage from "../../Assets/images/offerImage.webp";
import OfferImage1 from "../../Assets/images/offerImage1.webp";
import OfferImage2 from "../../Assets/images/offerImage2.webp";
// import dummy from "../../Assets/images/offerImage3.png";
import "./style.css";
const OfferPage=()=>{
    return(<>
<div className="imageFlex">
<img className="imageOffer" src={OfferImage} alt="offerImage"/>  
<img className="imageOffer" src={OfferImage1} alt="offerImage"/>    
<img className="imageOffer" src={OfferImage2} alt="offerImage"/>    
{/* <img src={dummy} alt="offerImage"/>     */}
</div>

</>)
}
export default OfferPage;