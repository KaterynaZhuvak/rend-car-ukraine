import React from "react";
import {
  StyledCard,
  StyledImg,
  StyledText,
  StyledTitleContainer,
} from "./Styled";
import UniqueButton from "../Button/UniqueButton";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import Modal from "../Modal/Modal";

const Card = ({
  id,
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

  const newTitle = `${createCorrectAddress(
    address
  )} | ${company} | ${type} | ${model} | ${title} | ${mileage}`;

  return (
    <StyledCard>
      <FavoriteBtn id={id} />
      <StyledImg src={img} alt={title} />
      <StyledTitleContainer>
        <h2 className="title">
          {title}{" "}
          <span className="titleBlue">
            {model.length <= 8 ? model : model.slice(0, 5) + "..."}
          </span>
          , {year}
        </h2>
        <h3 className="title">{price}</h3>
      </StyledTitleContainer>

      <StyledText>
        {newTitle.length <= 80 ? newTitle : newTitle.slice(0, 80) + "..."}
      </StyledText>
      <UniqueButton title={"Learn more"} width={"100%"} padding={"12px 0"} />
      {/* <Modal /> */}
    </StyledCard>
  );
};

export default Card;
