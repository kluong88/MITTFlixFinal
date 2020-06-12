import React from "react";
import Movie from "./Movie";

export default function Genre(props) {
  console.log(props.movies.length);

  if (props.movies.length > 0) {
    return (
      <div className="titleList">
        <div className="title">
          <h1>{props.genre}</h1>
          <div className="titles-wrapper">
            {props.movies.map((movie) => (
              <Movie
                movie={movie}
                key={movie.id}
                toggled={movie.my_list}
                toggleMyList={props.toggleMyList}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
