import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredCars } from "../../redux/catalog.reducer";

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
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const FiltersForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const brandValue = e.target.brands.value;
    dispatch(fetchFilteredCars(brandValue));
  };

  return (
    <form onSubmit={onSubmit}>
      <select name="brands" id="brand">
        {carBrands.map((brand) => (
          <option value={brand}>{brand}</option>
        ))}
      </select>

      <button>Search</button>
    </form>
  );
};

export default FiltersForm;
