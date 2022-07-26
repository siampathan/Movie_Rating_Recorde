import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
