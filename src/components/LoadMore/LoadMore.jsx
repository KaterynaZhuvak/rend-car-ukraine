import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCars } from "../../redux/catalog.reducer";

const LoadMore = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchListOfCars());
  };

  return (
    <button type="button" onClick={onClick()}>
      Load more
    </button>
  );
};

export default LoadMore;
