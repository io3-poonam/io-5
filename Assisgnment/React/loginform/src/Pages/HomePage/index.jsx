import React from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import ImageSliders from "../../components2/ImageSliders";
import OfferImage from "../../Assets/images/offerImage.webp";
import OfferImage1 from "../../Assets/images/offerImage1.webp";
import OfferImage2 from "../../Assets/images/offerImage2.webp";
import OfferImage4 from "../../Assets/images/offerImage4.webp";
import OfferImage5 from "../../Assets/images/offerImage5.webp";
import OfferImage6 from "../../Assets/images/offerImage6.webp";
import OfferImage7 from "../../Assets/images/offerImage7.webp";
import OfferImage8 from "../../Assets/images/offerImage8.webp";
import OfferImage9 from "../../Assets/images/offerImage9.webp";
import OfferImage10 from "../../Assets/images/offerImage10.webp";
import OfferImage11 from "../../Assets/images/offerImage11.webp";
import OfferImage12 from "../../Assets/images/offerImage12.webp";
import OfferPage from "../../components2/offerPage/Offer";
import "./style.css";
import AllProduct from "../../components2/AllProduct/AllProduct";
function HomePage() {
  const apiProductAll=`https://dummyjson.com/products`;
  const apiPhone=`https://dummyjson.com/products/search?q=phone`;
  const apiBook=`https://dummyjson.com/products/search?q=book`;
  const apiLaptop=`https://dummyjson.com/products/search?q=laptop`;
  const apiSkin=`https://dummyjson.com/products/search?q=skin`;
  const apiDress=`https://dummyjson.com/products/search?q=dress`;
  const apiOil=`https://dummyjson.com/products/search?q=oil`;
  const apiCream=`https://dummyjson.com/products/search?q=cream`;
  const apiPerfume =`https://dummyjson.com/products/search?q=Perfume `;
  
const offerImages=[OfferImage,OfferImage1,OfferImage2]
const offerImages1=[OfferImage4,OfferImage5,OfferImage6]
const offerImages2=[OfferImage7,OfferImage8,OfferImage9]
const offerImages3=[OfferImage10,OfferImage11,OfferImage12]

  return (
    <div>
    <div className="HomePage">
    {/* cart show  */ }

      <Header currentPageShow="Home Page"  isCartEnabled={true}  />
      </div>
      <div className="centerHomePage">
      <ImageSliders />
      <AllProduct api={apiProductAll}/>
      <OfferPage offerImages={offerImages}/>
      <AllProduct api={apiPhone}/>
      <OfferPage offerImages={offerImages1}/>
      <AllProduct api={apiBook}/>
      <OfferPage offerImages={offerImages2}/>
      <AllProduct api={apiPhone}/>
      <OfferPage offerImages={offerImages3}/>
      <AllProduct api={apiLaptop}/>
      <AllProduct api={apiSkin}/>
      <AllProduct api={apiDress}/>
      <AllProduct api={apiOil}/>
      <AllProduct api={apiCream}/>
      <AllProduct api={      apiPerfume
}/>

      </div>
      <Footer />
      </div>
  );
}

export default HomePage;
