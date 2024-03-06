import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCars } from "../redux/catalog.reducer";
import ListOfCars from "../components/ListOfCars/ListOfCars";
import { useSearchParams } from "react-router-dom";
import LoadMore from "../components/LoadMore/LoadMore";

const Catalog = () => {
  const listOfCars = useSelector((state) => state.catalog.listOfCars);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = { page: 1, limit: 12 };
    setSearchParams(params);
    dispatch(fetchListOfCars(params));
  }, []);

  return (
    <div>
      <ListOfCars data={listOfCars} />
      {listOfCars.length % 12 === 0 && <LoadMore />}
    </div>
  );
};

export default Catalog;
