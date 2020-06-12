import React from "react";
import Movie from "./Movie";

export default function Genre(props) {
  console.log(props);
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
}
