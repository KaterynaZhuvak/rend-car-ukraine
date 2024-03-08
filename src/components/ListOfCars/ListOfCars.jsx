import React from "react";
import Card from "../Card/Card";
import { StyledList } from "./Styled";

const ListOfCars = ({ data }) => {
  return (
    <StyledList>
      {data.length !== 0 && data.map((car) => <Card key={car.id} data={car} />)}
    </StyledList>
  );
};

export default ListOfCars;
