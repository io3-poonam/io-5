import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "../../pages/CountryCard/CountryCard";
const Country = () => {
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    ApiFetch();
  }, []);

  const ApiFetch = async () => {
    try {
      const api = "https://restcountries.com/v3.1/all            ";
      const response = await axios.get(api);
      const { data = {} } = response || {};
      setDataItem(data);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>helloooooooooooooooooooooooooooo</h1>
      {dataItem?.map((items, index) => {
        // {console.log("items",items)}

        return (
          <CountryCard
            key={index}
            common={items?.name.common}
            population={items?.name.population}
            area={items?.area}
            capital={items?.capital}
            continents={items?.continents}
            coatOfArms={items?.coatOfArms.svg}
            // languages={items?.languages.ell}
            // languages1={items?.languages.tur}

          />
        );
      })}
    </>
  );
};
export default Country;
