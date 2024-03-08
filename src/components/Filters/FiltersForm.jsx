import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilteredCars } from "../../redux/catalog.reducer";
import UniqueButton from "../Button/UniqueButton";
import { StyledForm } from "./Styled";
import DropDown from "../../assets/DropDown";
import DropUp from "../../assets/DropUp";

const carBrands = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land",
];

const FiltersForm = ({ onClick }) => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onClick(value);
  };

  return (
    <StyledForm>
      <div onClick={() => setOpen(!open)}>
        <div className="formSelect">
          {selected ? selected : "Select Country"}
          {open ? <DropDown /> : <DropUp />}
        </div>

        <ul className={`formDrop ${open ? "block" : "hidden"}`}>
          <div></div>
          {carBrands.map((brand) => (
            <li
              key={brand}
              onClick={() => {
                if (brand.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(brand);
                  setOpen(false);
                  setValue(brand);
                }
              }}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
      <UniqueButton
        onClick={handleClick}
        title={"Search"}
        padding={"14px"}
        width={"136px"}
      />
    </StyledForm>
  );
};

export default FiltersForm;
