import React from "react";

const MovieCard = ({ movie }) => {
    const getFlag = (language) =>
      `https://flagcdn.com/w40/${language}.png`; // Lingua in formato ISO 639-1
  
    return (
      <div className="movie-card">
        <h3>{movie.title || movie.name}</h3>
        <p>Titolo Originale: {movie.original_title || movie.original_name}</p>
        <img src={getFlag(movie.original_language)} alt="Flag" />
        <p>Voto: {movie.vote_average}</p>
      </div>
    );
  };
  

export default MovieCard;
