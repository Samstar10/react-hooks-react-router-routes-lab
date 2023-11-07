import React from "react";
import { movies } from "../data";

const movieList = movies.map((movie, index) => {
  return(
    <div key={index}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => {
          return <li key={index}>{genre}</li>
        })}
      </ul>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
