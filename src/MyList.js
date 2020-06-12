import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Movie from "./Movie";

export default function MyList(props) {
  return (
    <>
      <Header />
      <div className="movie">
        <img src={props.movie.poster_path} alt="Movie Poster" />
        <div className="overlay">
          <div className="title">{props.movie.title}</div>
          <div className="rating">{props.movie.vote_average}/10</div>
          <div className="plot">{props.movie.overview}</div>
          <div
            data-toggled={props.toggled}
            className="listToggle"
            onClick={() => props.toggleMyList(props)}
          >
            <div>
              <i className="fa fa-fw fa-plus"></i>
              <i className="fa fa-fw fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
