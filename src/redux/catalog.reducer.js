import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListOfCars = createAsyncThunk(
  "get/cars",
  async (_, thunkApi) => {
    const url = "https://65e7841e53d564627a8ef363.mockapi.io/api/car";
    const params = {
      page: 1,
      limit: 12,
    };
    try {
      const { data } = await axios.get(url, { params });
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
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",

  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchListOfCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.listOfCars = payload;
      })
      .addMatcher(isAnyOf(fetchListOfCars.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchListOfCars.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const catalogReducer = catalogSlice.reducer;
