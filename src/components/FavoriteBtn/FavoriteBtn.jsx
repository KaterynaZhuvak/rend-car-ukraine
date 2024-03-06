import React, { useEffect, useState } from "react";
import Heart from "../../assets/Heart.jsx";
import { StyledFavoriteBtn } from "./Styled.js";
import { addFavorite, deleteFavorite } from "../../redux/catalog.reducer.js";
import { useDispatch, useSelector } from "react-redux";

const FavoriteBtn = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.catalog.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [favorites, id]);

  const onClick = () => {
    isFavorite ? dispatch(deleteFavorite(id)) : dispatch(addFavorite(id));
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
