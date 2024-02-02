import axios from "axios";
import React, { useEffect, useState } from "react";
const Country=()=>{
    const [dataItem,setDataItem]=useState([]);
    useEffect(()=>{
        ApiFetch();
    },[])

        const ApiFetch=async()=>{
    try{

            const api="https://restcountries.com/v3.1/all";
            // const api="https://restcountries.com/v3.1/name/{name}"
            console.log(api);
            const response=await axios.get(api);
            // const {data={}}=response||{}
            const {data ={}}=response||{}
            setDataItem(data)
            console.log(dataItem?.data)
            console.log(data?.name)
            
        }
    catch(err){
        console.log(err)
    }
}

   return<>
   {dataItem?.data
    // dataItem.map((item,index)=>{
    //     return(common={item? .common})
    // })
   }
   <h1>hello</h1>
    </>
}
export default Country;