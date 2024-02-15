import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.scss";

import MovieListing from "../MovieListing/MovieListing";
import {fetchMovies,fetchShows} from "../../redux/reducer/movieSlice"

const Home = () => {
  const dispatch = useDispatch();

  //initial render
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home-banner">
        <MovieListing />
      </div>
    </div>
  );
};


export default Home;
