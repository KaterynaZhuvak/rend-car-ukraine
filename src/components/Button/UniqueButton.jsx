import React from "react";
import { StyledButton } from "./Styled";

const UniqueButton = ({ title, padding, width }) => {
  return (
    <StyledButton padding={padding} width={width}>
      {title}
    </StyledButton>
  );
};

export default UniqueButton;
