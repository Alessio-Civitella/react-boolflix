import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";

const SearchBar = () => {
  const { setMovies, setQuery } = useContext(GlobalStateContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    setQuery(inputValue);

    const API_KEY = "49bd49360191f8c5d1e540fb6af44bd2";
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}&language=it-IT`
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca un film..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;
