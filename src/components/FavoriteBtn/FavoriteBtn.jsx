import React, { useEffect, useState } from "react";
import Heart from "../../assets/Heart.jsx";
import { StyledFavoriteBtn } from "./Styled.js";
import { addFavorite, deleteFavorite } from "../../redux/catalog.reducer.js";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const FavoriteBtn = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.catalog.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesArray = favorites.map((item) => item.id);
    setIsFavorite(favoritesArray.includes(data.id));
  }, [favorites, data]);

  const onClick = () => {
    if (isFavorite) {
      Notify.info("The car was removed from favorites!");
      return dispatch(deleteFavorite(data));
    } else {
      Notify.success("The car has been successfully added to favorites!");
      return dispatch(addFavorite(data));
    }
  };
  return (
    <StyledFavoriteBtn type="button" onClick={onClick}>
      <Heart
        fill={isFavorite ? "rgb(52, 112, 255)" : "transparent"}
        stroke={isFavorite ? "rgb(52, 112, 255)" : "white"}
      />
    </StyledFavoriteBtn>
  );
};

export default FavoriteBtn;
