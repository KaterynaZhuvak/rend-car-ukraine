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
    background: var(--white-color);
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
    color: var(--blue-color);
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
    color: var(--black-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .modalTitleCharacteristics {
    color: var(--black-color);
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

  .rentalBtn {
    text-align: center;
    display: block;
    background-color: var(--blue-color);
    color: var(--white-color);
    width: 168px;
    padding: 12px 0;
    border-radius: 12px;
    border: 1px solid var(--blue-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .rentalBtn:hover,
  .rentalBtn:focus {
    transform: scale(1.05);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }
`;
