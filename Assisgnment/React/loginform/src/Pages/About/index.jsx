import React, { useEffect } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import axios from "axios";
function About() {
  const currentPageShow="About Page";
  useEffect(()=>{apiFetch()},[])
  const apiFetch=async()=>{
  try{

      const api="https://restcountries.com/#endpoints-all"
      const Res=await axios.get(api)
      console.log(api,Res)
    }
  
  catch(err){
    console.log(err)
  }
}
  return (
    <React.Fragment>
      <Header currentPage={currentPageShow}  />

      <h1>About page</h1>
      <Footer />
    </React.Fragment>
  );
}

export default About;
