import React from "react";
import { StyledModal } from "./Styled";
import { createPortal } from "react-dom";
import Close from "../../assets/Close";
import { createCorrectAddress } from "../../helpers/createCityName";
import UniqueButton from "../Button/UniqueButton";

const modalElement = document.getElementById("modal");

const Modal = ({ onClick, onClose, data }) => {
  const newTitle = `${createCorrectAddress(data.address)} | Id:${
    data.id
  } | Year:${data.year} | Type:${data.type} | Fuel Consumption:${
    data.fuelConsumption
  } | Engine Size:${data.engineSize}`;

  return createPortal(
    <StyledModal onClick={onClick}>
      <div className="modalContainer">
        <button type="button" className="closeBtn" onClick={onClose}>
          <Close />
        </button>
        <img className="modalImg" src={data.img} alt={data.make} />
        <div>
          {" "}
          <h2 className="modalTitle">
            {data.make} <span className="modalTitleBlue">{data.model}</span>,{" "}
            {data.year}
          </h2>
          <p className="modalCharacteristics">{newTitle}</p>
          <p className="modalDescription">{data.description}</p>
          <h3 className="modalTitleCharacteristics">
            Accessories and functionalities:
          </h3>
          <p className="modalCharacteristics">
            {" "}
            {data.accessories.join(" | ")}
          </p>
          <h3 className="modalTitleCharacteristics">Rental Conditions: </h3>
          {data.rentalConditions.split("\n").map((item, index) => (
            <span key={index} className="modalCondition">
              {item.split("").map((item, itemIndex) =>
                isNaN(item) ? (
                  item
                ) : (
                  <span key={itemIndex} style={{ color: "rgb(52, 112, 255)" }}>
                    {item}
                  </span>
                )
              )}
            </span>
          ))}
        </div>

        <UniqueButton
          // onClick={() => {
          //   setIsOpenModal(true);
          // }}
          title={"Rental car"}
          width={"168px"}
          padding={"12px 0"}
        />
      </div>
    </StyledModal>,
    modalElement
  );
};

export default Modal;

//  {
//         "id": 9582,
//         "year": 2008,
//         "make": "Buick",
//         "model": "Enclave",
//         "type": "SUV",
//         "img": "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
//         "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//         "fuelConsumption": "10.5",
//         "engineSize": "3.6L V6",
//         "accessories": [
//             "Leather seats",
//             "Panoramic sunroof",
//             "Premium audio system"
//         ],
//         "functionalities": [
//             "Power liftgate",
//             "Remote start",
//             "Blind-spot monitoring"
//         ],
//         "rentalPrice": "$40",
//         "rentalCompany": "Luxury Car Rentals",
//         "address": "123 Example Street, Kiev, Ukraine",
//         "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//         "mileage": 5858
//     },
