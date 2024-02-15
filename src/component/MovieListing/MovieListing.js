import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { getAllMovies, getAllSeries } from "../../redux/reducer/movieSlice";

const MovieListing = () => {
  // const movies = useSelector((state) => state.movie.moviesList);
  // const series = useSelector((series)=>series.movie.seriesList)

  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  // Do Error Handling
  return (
    <div className="movies-list">
      <div className="movie-title">
        <h2>MOVIES</h2>
      </div>
      <div className="listing-movies">
        {movies.Error ? <h2>{movies.Error}</h2>:movies.Search &&
          movies.Search.map((item) => {
            return <MovieCard item={item} key={item.imdbID} />;
          })}
      </div>
      {/* Series List */}
      <div className="series-title">
        <h2>SERIES</h2>
      </div>
      <div className="listing-series">
        {series.Error ? <h2>{series.Error}</h2>:series.Search &&
          series.Search.map((item) => {
            return <MovieCard item={item} key={item.imdbID} />;
          })}
      </div>
    </div>
  );
};
export default MovieListing;
