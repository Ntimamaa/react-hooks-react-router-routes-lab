import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>Title:{movie.title}</h2>
          <h3>Time{movie.time}</h3>
          <ul key={`${movie.id}_genres`}>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;


