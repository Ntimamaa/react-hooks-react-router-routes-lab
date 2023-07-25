import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.id}>
          <h2>Name:{actor.name}</h2>
          <ul key={`${actor.id}_movies`}>
            {actor.movies.map((movie) => (
              <li key={movie.id}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;

