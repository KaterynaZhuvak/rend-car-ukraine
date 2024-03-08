import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOfCars from "../components/ListOfCars/ListOfCars";
import FiltersForm from "../components/Filters/FiltersForm";
import { filterFavorites } from "../redux/catalog.reducer";
import Pagination from "../components/Pagination/Pagination";
import NoResults from "../components/NoResults/NoResults";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.catalog.favorites);
  const filteredFavorites = useSelector(
    (state) => state.catalog.filteredFavorites
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [copyFavorites, setCopyFavorites] = useState([]);

  useEffect(() => {
    setCopyFavorites(favorites);
    dispatch(filterFavorites(""));
  }, [dispatch, favorites]);

  const onSubmit = (value) => {
    filterFavorites.length === 0
      ? Notify.info("There is no suitable brand in the list!")
      : dispatch(filterFavorites(value));
  };

  const lastIndex = currentPage * 12;
  const firstIndex = lastIndex - 12;
  const currentCars = copyFavorites.slice(firstIndex, lastIndex);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <FiltersForm onClick={onSubmit} />
      {favorites.length === 0 ? (
        <NoResults />
      ) : (
        <ListOfCars
          data={
            filteredFavorites.length === 0 ? currentCars : filteredFavorites
          }
        />
      )}
      {favorites.length > 12 && (
        <Pagination totalCars={favorites.length} paginate={paginate} />
      )}
    </div>
  );
};

export default Favorites;
