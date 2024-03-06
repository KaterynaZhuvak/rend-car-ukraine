import React from "react";
import { StyledCard, StyledImg } from "./Styled";

const Card = ({
  img,
  title,
  year,
  price,
  company,
  mileage,
  adress,
  model,
  type,
}) => {
  return (
    <StyledCard>
      <StyledImg src={img} alt={title} />
      <h2>
        {title} <span>{model}</span>, {year} {price}
      </h2>
      <p>
        {adress} | {company} | {model} | {type} | {mileage} |
      </p>
      <button type="button">Learn More</button>
    </StyledCard>
  );
};

export default Card;
