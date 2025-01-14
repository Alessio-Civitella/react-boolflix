import React, { createContext, useState } from "react";

// Creazione del contesto
export const GlobalStateContext = createContext();

// Provider per il contesto
export const GlobalStateProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [query, setQuery] = useState("");

  const globalState = {
    movies,
    setMovies,
    tvShows,
    setTvShows,
    query,
    setQuery,
  };

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

