import React from "react"
import "./MovieCard.scss"
import { Link } from "react-router-dom"
import defaultImg from "../../images/defaultIMG.jpg"

const MovieCard = ({item}) => {
    return (
        <div className="card">
        <Link to={`/movie/:${item.imdbID}`}>
            <div className="image-container">
                <img src={item?.Poster =="N/A" ? defaultImg  :item?.Poster} ></img> 
            </div>
            <div className="card-info">
                <div className="movies-title">
                    <h4>{item?.Title}</h4> 
                </div>
                <div className="movies-title">
                    <h4>{item?.Year}</h4>
                </div>
            </div>
        </Link>
        </div>
    )
} 
export default MovieCard