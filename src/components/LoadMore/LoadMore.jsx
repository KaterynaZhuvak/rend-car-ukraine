import React from "react";
import { useDispatch } from "react-redux";
import { fetchLoadMore } from "../../redux/catalog.reducer";
import { useSearchParams } from "react-router-dom";
import { StyledLoadMore } from "./Styled";

const LoadMore = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    const nextPage = (parseInt(searchParams.get("page"), 10) || 1) + 1;

    searchParams.set("page", nextPage);
    setSearchParams(searchParams);

    dispatch(fetchLoadMore(nextPage));
  };

  return (
    <StyledLoadMore type="button" onClick={onClick}>
      Load more
    </StyledLoadMore>
  );
};

export default LoadMore;
