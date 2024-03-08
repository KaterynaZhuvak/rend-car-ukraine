import React from "react";
import noResults from "../../assets/web.png";
import { StyledNoResults } from "./Styled";

const NoResults = () => {
  return (
    <StyledNoResults className="noResultsContainer">
      <p className="noResultsTitle">
        You haven't added anything to your favorites yet!
      </p>
      <img className="noResultsImg" src={noResults} alt="loop" />
    </StyledNoResults>
  );
};

export default NoResults;
