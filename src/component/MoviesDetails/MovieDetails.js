import React, { useEffect } from "react";
import "./MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMoviesOrShow,
  getSelectedMovieOrShow,
  removeMoieOrShow,
} from "../../redux/reducer/movieSlice";
import defaultImg from "../../images/defaultIMG.jpg"

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const selectedMoviesOrShow = useSelector(getSelectedMovieOrShow);
  const {
    Poster,
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    imdbVotes,
    Actors,
    Language,
    Awards,
    Country,
    imdbRating,
    Plot,
  } = selectedMoviesOrShow;

  useEffect(() => {
    dispatch(fetchMoviesOrShow(imdbID.slice(1)));
    return () => {
      dispatch(removeMoieOrShow());
    };
  }, [imdbID, dispatch]);

  return (
    <div className="movie-details">
      <div className="image-section">
        <img src={Poster == "N/A" ?defaultImg:Poster} alt={Title} className="movie-detail-img"></img>
      </div>
      <div className="movies-desc">
        <div className="title">
          <h2>{Title}</h2>
        </div>
        <div className="sub-title">
          <table className="table">
            <tbody style={{ display: "flex", marginTop:"2rem"}}>
              <tr>
                <th> IMDB Rating : </th>
                <td>{imdbRating}</td>
              </tr>
              <tr>
                <th> IMDB Votes :</th>
                <td>{imdbVotes}</td>
              </tr>
              <tr>
                <th>Running Time :</th>
                <td>{Runtime}</td>
              </tr>
              <tr>
                <th>Year : </th>
                <td>{Year}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="desc">
          <p className="desc-plot">{Plot}</p>
        </div>

        <table className="table">
          <tbody>
            <tr>
              <th>Director : </th>
              <td>{Director}</td>
            </tr>
            <tr>
              <th>Stars :</th>
              <td>{Actors}</td>
            </tr>
            <tr>
              <th>Generes :</th>
              <td>{Genre}</td>
            </tr>
            <tr>
              <th>Language :</th>
              <td>{Language}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MovieDetails;
