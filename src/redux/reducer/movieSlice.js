import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Api Key
const APIKey = "619e6513";
const baseURL = "http://www.omdbapi.com";

const initialState = {
  moviesList: {},
  seriesList: {},
  selectedMoviesOrShow: {},
  loading: false,
};

// createAsyncThunk --> simplifies the process of handling asynchronous actions in Redux.
// createAsyncThunk  -->first params -->prefix for the action types
// --> second params --> async function that performs the asynchronous operation.
export const fetchMovies = createAsyncThunk("movie/fetchMovies", async (movieName="india") => {
  try {
    console.log(movieName);
    let responseMovies = await axios.get(
      `${baseURL}/?apiKey=${APIKey}&type=movie&s=${movieName}`
    );
    return responseMovies.data;
  } catch (error) {
    console.log(error.message);
    return error.message
  }
});

export const fetchShows = createAsyncThunk("movie/fetchShows", async (showName="india") => {
  try {
    console.log(showName);
    let responseSeries = await axios.get(
      `${baseURL}/?apiKey=${APIKey}&type=series&s=${showName}`
    );
    return responseSeries.data;
  } catch (error) {
    console.log(error.message);
  }
});

// Selecte Movie or Series
export const fetchMoviesOrShow = createAsyncThunk(
  "movie/fetchMoviesOrShow",
  async (id) => {
    try {
      let responseMovies = await axios.get(
        `${baseURL}/?apiKey=${APIKey}&i=${id}`
      );
      return responseMovies.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.seriesList = payload;
    },
    removeMoieOrShow:(state)=>{
      state.selectedMoviesOrShow ={}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.moviesList = payload;
      }),
      builder.addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
      }),
      // for series show
      builder.addCase(fetchShows.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.seriesList = payload;
      }),
      // for series show
      builder.addCase(fetchMoviesOrShow.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.selectedMoviesOrShow = payload;
      });
  },
});

export const { addMovies, addSeries ,removeMoieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movie.moviesList;
export const getAllSeries = (state) => state.movie.seriesList; //sliceName -->movie  seriesName --->Properties
export const getSelectedMovieOrShow = (state)=>state.movie.selectedMoviesOrShow;
export default movieSlice.reducer;
