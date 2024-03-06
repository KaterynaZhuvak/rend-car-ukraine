import React from "react";
import {
  StyledCard,
  StyledImg,
  StyledText,
  StyledTitleContainer,
} from "./Styled";
import UniqueButton from "../Button/UniqueButton";

const Card = ({
  img,
  title,
  year,
  price,
  company,
  mileage,
  address,
  model,
  type,
}) => {
  const createCorrectAddress = (address) => {
    const newArray = [];

    address
      .replaceAll(",", "")
      .split(" ")
      .reverse()
      .forEach((item, i) => {
        if (i >= 0 && i <= 1) {
          newArray.push(item);
        } else {
          return;
        }
      });

    return newArray.reverse().join(" | ");
  };

  return (
    <StyledCard>
      <StyledImg src={img} alt={title} />
      <StyledTitleContainer>
        <h2 className="title">
          {title} <span className="titleBlue">{model}</span>, {year}
        </h2>
        <h3 className="title">{price}</h3>
      </StyledTitleContainer>

      <StyledText>
        {createCorrectAddress(address)} | {company} | {type} | {model} | {title}{" "}
        | {mileage}
      </StyledText>
      <UniqueButton title={"Learn more"} width={"100%"} padding={"12px 0"} />
    </StyledCard>
  );
};

export default Card;
