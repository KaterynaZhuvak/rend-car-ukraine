import styled from "styled-components";

export const StyledCard = styled.li`
  flex-basis: calc(25% - 29px);
  width: 274px;
  height: 426px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.071%
    ),
    rgb(243, 243, 242);
`;
