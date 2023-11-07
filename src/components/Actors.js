import React from "react";
import { actors } from "../data";

const actorList = actors.map((actor, index) => {
  return(
    <div key={index}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, index) => {
          return(
            <li key={index}>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  )
}

export default Actors;
