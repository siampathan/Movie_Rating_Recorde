import { Link } from "react-router-dom";
import "./header-style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <Link to="/">
          <img
            className="banner_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" className="item">
          Popular
        </Link>
        <Link to="/movies/top_rated" className="item">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="item">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
