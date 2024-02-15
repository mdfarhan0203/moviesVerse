import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducer/movieSlice";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});

export default store;
