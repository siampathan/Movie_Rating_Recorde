import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<h1>Movie Details Page</h1>}></Route>
        <Route path="movies/:type" element={<h1>Movie List Page</h1>}></Route>
        <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
