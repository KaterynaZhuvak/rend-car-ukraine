import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCars } from "../redux/catalog.reducer";
import ListOfCars from "../components/ListOfCars/ListOfCars";

const Catalog = () => {
  const listOfCars = useSelector((state) => state.catalog.listOfCars);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = 1;
    dispatch(fetchListOfCars(page));
  }, []);

  return <ListOfCars data={listOfCars} />;
};

export default Catalog;
