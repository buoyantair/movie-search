import React from "react";

const MoviesList = ({ moviesList }) => (
  <ul>
    {moviesList &&
      moviesList.map(({ Title, imdbID }) => <li key={imdbID}> {Title} </li>)}
  </ul>
);

export default MoviesList;
