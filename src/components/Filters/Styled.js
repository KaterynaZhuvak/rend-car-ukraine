import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;
  position: relative;

  .formSelect {
    position: relative;
    border-radius: 14px;
    background: var(--grey-color);
    border: 1px solid var(--grey-color);
    width: 224px;
    height: 48px;
    padding: 14px 18px;

    color: rgb(18, 20, 23);
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
  }

  .formSelect svg {
    position: absolute;
    top: 12px;
    right: 10px;
  }

  .formDrop {
    position: absolute;
    top: 50px;
    left: 34%;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: var(--white-color);
    z-index: 1;
    width: 224px;
    height: 272px;
    overflow: auto;
    padding: 10px 18px;
  }

  .formDrop li {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 4px 0;
    cursor: pointer;
  }

  .formDrop li:hover {
    color: black;
  }

  .block {
    display: block;
  }

  .hidden {
    display: none;
  }

  .chosen {
    background-color: blue;
  }
`;
