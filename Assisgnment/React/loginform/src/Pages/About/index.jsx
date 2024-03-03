import React, { useEffect } from "react";
import Header from "../../components2/Header";
import Footer from "../../components2/Footer";
import axios from "axios";
import AboutMe from "../../components2/Aboutme";
function About() {
  useEffect(()=>{apiFetch()},[])
  const apiFetch=async()=>{
  try{

      const api="https://restcountries.com/#endpoints-all"
      const Res=await axios.get(api)
      console(api,Res)
    }
  
  catch(err){
    console.log(err)
  }
}
  return (
    <React.Fragment>
      <Header/>
<AboutMe/>
      <Footer />
    </React.Fragment>
  );
}

export default About;
