import React from "react";
import { directors } from "../data";

const directorList = directors.map((director, index) =>{
  return(
    <div key={index}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie, index) => {
          return (
            <li key={index}>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors;
