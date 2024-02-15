import React, { useState } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import MovieDetails from "./component/MoviesDetails/MovieDetails";
import NoPageFound from "./component/NoPageFound/NoPageFound";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movie/:imdbID" element={<MovieDetails />}></Route>
          <Route path="*" element={<NoPageFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
