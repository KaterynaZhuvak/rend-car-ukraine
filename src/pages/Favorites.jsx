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
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setCopyFavorites(favorites);
    dispatch(filterFavorites(""));
  }, [dispatch, favorites]);

  const onSubmit = (value) => {
    dispatch(filterFavorites(value));
  };

  useEffect(() => {
    if (!firstRender && filteredFavorites.length === 0) {
      Notify.info("There is no suitable brand in the list!");
    }
    setFirstRender(false);
  }, [filteredFavorites, firstRender]);

  const lastIndex = currentPage * 8;
  const firstIndex = lastIndex - 8;
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
      {favorites.length > 8 && (
        <Pagination totalCars={favorites.length} paginate={paginate} />
      )}
    </div>
  );
};

export default Favorites;
