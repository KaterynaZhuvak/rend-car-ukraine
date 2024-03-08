import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 50px;
  background-color: var(--blue-color);

  .logoContainer {
    display: flex;
    align-items: center;
  }

  .logoTitle {
    color: var(--white-color);
    font-weight: 700px;
  }

  .hederImg {
    width: 50px;
    height: 50px;
  }

  .linksContainer {
    display: flex;
    justify-content: column;
    gap: 10px;
  }

  a {
    display: inline-block;
    background-color: var(--white-color);
    color: var(--black-color);
    text-align: center;
    padding: 14px 0;
    width: 150px;
    border-radius: 12px;
    border: 1px solid var(--white-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .active {
    color: var(--white-color);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }

  a:hover,
  a:focus {
    transform: scale(1.05);
    color: var(--white-color);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }
`;
