import styled from "styled-components";

export const StyledCard = styled.li``;

export const StyledImg = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.071%
    ),
    rgb(243, 243, 242);
  margin-bottom: 8px;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;

  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
  }

  .titleBlue {
    color: rgb(52, 112, 255);
  }
`;

export const StyledText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 28px;
`;
