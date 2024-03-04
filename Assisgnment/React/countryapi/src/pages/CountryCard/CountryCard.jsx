import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CountryCard = (props) => {
  const { common, population ,area,coatOfArms,continents,capital= [] } = props || {};
  console.log(population);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={coatOfArms} />
        <Card.Body>
          <Card.Title>{common}</Card.Title>
          <Card.Text>{continents}</Card.Text>
          <Card.Text>{area}</Card.Text>
          
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>{capital}</Card.Text>
          {/* <Card.Text>{region}</Card.Text> */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default CountryCard;
