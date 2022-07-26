import { useEffect, useState, Fragment } from "react";
import "./home-style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Fragment>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link to={`movie/${movie.id}`} className="items">
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
              </div>

              <div className="overlay">
                <div className="title">{movie.original_title}</div>
                <div className="runtime">
                  {movie.release_date}
                  <span className="rating">
                    {movie.vote_average}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="description">{movie.overview}</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Home;

//https://api.themoviedb.org/3/movie/550?api_key=935c845be391ee724333badcca8199ef&language=en-US
//935c845be391ee724333badcca8199ef

//https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
