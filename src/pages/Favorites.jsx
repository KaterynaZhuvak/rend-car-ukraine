import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOfCars from "../components/ListOfCars/ListOfCars";
import FiltersForm from "../components/Filters/FiltersForm";
import { filterFavorites } from "../redux/catalog.reducer";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.catalog.favorites);
  const filteredFavorites = useSelector(
    (state) => state.catalog.filteredFavorites
  );

  const onSubmit = (value) => {
    dispatch(filterFavorites(value));
  };
  return (
    <div>
      <FiltersForm onClick={onSubmit} />
      <ListOfCars
        data={filteredFavorites.length === 0 ? favorites : filteredFavorites}
      />
    </div>
  );
};

export default Favorites;
