import React from "react";

export default function Movie(props) {
  return (
    <div class="movie">
      <img src={props.movie.poster_path} />
      <div class="overlay">
        <div class="title">{props.movie.title}</div>
        <div class="rating">{props.movie.vote_average}/10</div>
        <div class="plot">{props.movie.overview}</div>
        <div
          data-toggled={props.toggled}
          class="listToggle"
          onClick={() => props.toggleMyList(props)}
        >
          <div>
            <i class="fa fa-fw fa-plus"></i>
            <i class="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
