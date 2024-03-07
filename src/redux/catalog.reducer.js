import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListOfCars = createAsyncThunk(
  "get/cars",
  async (data, thunkApi) => {
    const url = `https://65e7841e53d564627a8ef363.mockapi.io/api/car?page=${data.page}&limit=${data.limit}`;
    try {
      const { data } = await axios.get(url);
      console.log("data: ", data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchLoadMore = createAsyncThunk(
  "get/moreCars",
  async (page, thunkApi) => {
    const url = `https://65e7841e53d564627a8ef363.mockapi.io/api/car?page=${page}&limit=12`;
    try {
      const { data } = await axios.get(url);
      console.log("data: ", data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  "get/filteredCars",
  async (data, thunkApi) => {
    const url = `https://65e7841e53d564627a8ef363.mockapi.io/api/car?orderBy=${data}`;
    try {
      const { data } = await axios.get(url);
      console.log("data: ", data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  favorites: [],
  listOfCars: [],
  filteredCars: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",

  initialState,

  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    },
    deleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== payload.id
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchListOfCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.listOfCars = [...payload];
        state.error = null;
      })
      .addCase(fetchLoadMore.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.listOfCars = [...state.listOfCars, ...payload];
        state.error = null;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.filteredCars = [...payload];
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchListOfCars.pending, fetchLoadMore.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchListOfCars.rejected, fetchLoadMore.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { addFavorite, deleteFavorite } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
