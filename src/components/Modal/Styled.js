import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1;

  .modalContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 541px;
    height: 752px;
    border-radius: 24px;
    background: rgb(255, 255, 255);
    z-index: 2;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .closeBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
    border: none;
  }

  .modalImg {
    width: 100%;
    height: 248px;
    border-radius: 14px;
    background: rgb(243, 243, 242);
  }

  .modalTitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin-bottom: 8px;
  }

  .modalTitleBlue {
    color: rgb(52, 112, 255);
  }

  .modalCharacteristics {
    width: 300px;
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 14px;
  }

  .modalDescription {
    color: rgb(18, 20, 23);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .modalTitleCharacteristics {
    color: rgb(18, 20, 23);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .modalCondition {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -2%;
    text-align: center;
    border-radius: 35px;
    background: rgb(249, 249, 249);
    padding: 5px;
    margin-bottom: 8px;
    margin-right: 8px;
  }
`;
