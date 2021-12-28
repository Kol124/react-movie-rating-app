import React from "react";
import RateMovie from "./components/RateMovie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <main className="container">
      <h1>Rate Your Favorite Movies</h1>
      <RateMovie />
      <MovieList />
    </main>
  );
}

export default App;
