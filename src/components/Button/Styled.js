import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: 12px;
  border: 1px solid rgb(52, 112, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
`;
