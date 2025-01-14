import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import MovieCard from "./MovieCard";
import SearchBar from "./searchBar";

const AppContent = () => {
  const { movies, tvShows, query } = useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const renderMovies = () => {
    if (loading) {
      return <p>Caricamento in corso...</p>;
    }

    if (error) {
      return <p className="error-message">{error}</p>;
    }

    if (!movies.length && !tvShows.length && query) {
      return <p>Nessun risultato trovato per "{query}".</p>;
    }

    return (
      <>
        <h2>Film</h2>
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <h2>Serie TV</h2>
        <div className="movies-container">
          {tvShows.map((tv) => (
            <MovieCard key={tv.id} movie={tv} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <SearchBar setLoading={setLoading} setError={setError} />
      {renderMovies()}
    </div>
  );
};

export default AppContent;
