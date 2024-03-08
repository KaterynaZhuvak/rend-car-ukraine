import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  .heroTitleContainer {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
  }

  .heroText {
    font-size: 20px;
    font-weight: 700;
  }

  .heroTitle {
    font-size: 50px;
    font-weight: 700;
  }

  .heroDescription {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
  }

  .heroBtn {
    background-color: var(--blue-color);
    color: var(--white-color);
    width: 250px;
    text-align: center;
    padding: 15px 0;
    border-radius: 12px;
    border: 1px solid var(--blue-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .heroBtn:hover,
  .heroBtn:focus {
    transform: scale(1.05);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }

  .heroImg {
    border-radius: 14px;
    height: 400px;
  }
`;
