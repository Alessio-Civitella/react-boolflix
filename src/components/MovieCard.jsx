import React from "react";

  const MovieCard = ({ movie }) => {
    const getStars = (rating) => Math.ceil(rating / 2);
  
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
        <div className="movie-info">
          <h3>{movie.title || movie.name}</h3>
          <p>⭐ {getStars(movie.vote_average)} / 5</p>
        </div>
      </div>
    );
  };
  
export default MovieCard;
