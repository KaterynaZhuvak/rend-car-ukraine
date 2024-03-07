import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCars } from "../redux/catalog.reducer";
import ListOfCars from "../components/ListOfCars/ListOfCars";
import { useSearchParams } from "react-router-dom";
import LoadMore from "../components/LoadMore/LoadMore";
import FiltersForm from "../components/Filters/FiltersForm";

const Catalog = () => {
  const listOfCars = useSelector((state) => state.catalog.listOfCars);
  const filteredCars = useSelector((state) => state.catalog.filteredCars);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = { page: 1, limit: 12 };
    setSearchParams(params);
    dispatch(fetchListOfCars(params));
  }, []);

  return (
    <div>
      <FiltersForm />
      <ListOfCars data={listOfCars} />
      {listOfCars.length % 12 === 0 && <LoadMore />}
    </div>
  );
};

export default Catalog;
