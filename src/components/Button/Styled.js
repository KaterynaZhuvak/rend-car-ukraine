import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--blue-color);
  color: var(--white-color);
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-radius: 12px;
  border: 1px solid var(--blue-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }
`;
