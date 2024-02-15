import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
import userLogo from "../../images/user-logo.jpg";
import {fetchMovies,fetchShows} from "../../redux/reducer/movieSlice"
import { FaBeer } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [searchText, setSearchText] = useState("");

  const handlerChangea = (e)=>{
    setSearchText(e.target.value)
  }



const handlerSubmit =(e)=>{
  e.preventDefault()
  if(searchText =="") return 
  if(searchText){
    console.log(searchText);
    dispatch(fetchMovies(searchText))
    dispatch(fetchShows(searchText))
    setSearchText("")
    navigator("/")
  }



  console.log("handler submit search clicked",searchText)
}

useEffect(()=>{
  console.log("HEADER FILE");
  },[searchText,dispatch])


  return (
    <div className="header-container">
      <Link to="/">
        <div className="logo">
          <h3 className="header-title">MovieVerse</h3>
        </div>
      </Link>
      <div className="search">
        <form onSubmit={handlerSubmit} className="form-search">
          <input
            className="input-search"
            type="text"
            placeholder="Search Movie and Show"
            value={searchText}
            name="searchText"
            onChange={handlerChangea}
          ></input>
          <button type="submit" className="submit-btn"><BiSearchAlt2  className="search-icon"/></button>
        </form>
      </div>
      <div className="user">
        <img src={userLogo} alt="user images" className="user-logo" />
      </div>
    </div>
  );
};
export default Header;
