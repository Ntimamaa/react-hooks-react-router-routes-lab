import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.id}>
          <h2>Name:{director.name}</h2>
          <ul key={`${director.id}_movies`}>
            {director.movies.map((movie) => (
              <li key={movie.id}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

