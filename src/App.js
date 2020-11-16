import React, { useState } from "react";
import "./App.css";

import { moviesData } from "./Constants/data";
import MovieList from "./Component/MovieList/MovieList";
import AddMovie from "./Component/Add/Add";
import Filter from "./Component/Filter/Filter";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [textSerach, setTextSerach] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const handleAdd = (newMovie) => {

    if (newMovie.name !== "") {
      setMovies([...movies, newMovie]);
    }
  };
  return (
    <div style={{ backgroundColor: "##41404f" }}>
      <div className="navmenu">
        <Filter
          rating={searchRate}
          setSearchRate={setSearchRate}
          setTextSerach={setTextSerach}
        />
        <AddMovie handleAdd={handleAdd} />
      </div>
      <MovieList
        searchRate={searchRate}
        textSerach={textSerach}
        movies={movies}
      />
    </div>
  );
}

export default App;
