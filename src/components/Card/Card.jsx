import React, { useEffect, useState } from "react";
import {
  StyledCard,
  StyledImg,
  StyledText,
  StyledTitleContainer,
} from "./Styled";
import UniqueButton from "../Button/UniqueButton";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import Modal from "../Modal/Modal";
import { createCorrectAddress } from "../../helpers/createCityName";

const Card = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      return setIsOpenModal(false);
    }
  };

  const handleClickOnButton = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setIsOpenModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, []);

  const newTitle = `${createCorrectAddress(data.address)} | ${data.company} | ${
    data.type
  } | ${data.model} | ${data.title} | ${data.mileage}`;

  return (
    <StyledCard>
      <FavoriteBtn id={data.id} />
      <StyledImg src={data.img} alt={data.title} />
      <StyledTitleContainer>
        <h2 className="title">
          {data.make}{" "}
          <span className="titleBlue">
            {data.model.length <= 8
              ? data.model
              : data.model.slice(0, 5) + "..."}
          </span>
          , {data.year}
        </h2>
        <h3 className="title">{data.price}</h3>
      </StyledTitleContainer>

      <StyledText>
        {newTitle.length <= 80 ? newTitle : newTitle.slice(0, 80) + "..."}
      </StyledText>
      <UniqueButton
        onClick={() => {
          setIsOpenModal(true);
        }}
        title={"Learn more"}
        width={"100%"}
        padding={"12px 0"}
      />
      {isOpenModal && (
        <Modal
          data={data}
          onClose={handleClickOnButton}
          onClick={handleOverlayClick}
        />
      )}
    </StyledCard>
  );
};

export default Card;
