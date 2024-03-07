import React from "react";
import { useSelector } from "react-redux";
import ListOfCars from "../components/ListOfCars/ListOfCars";

const Favorites = () => {
  const favorites = useSelector((state) => state.catalog.favorites);
  return (
    <div>
      <ListOfCars data={favorites} />
    </div>
  );
};

export default Favorites;
