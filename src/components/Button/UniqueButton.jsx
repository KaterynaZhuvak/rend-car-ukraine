import React from "react";
import { StyledButton } from "./Styled";

const UniqueButton = ({ onClick, title, padding, width }) => {
  return (
    <StyledButton onClick={onClick} padding={padding} width={width}>
      {title}
    </StyledButton>
  );
};

export default UniqueButton;
