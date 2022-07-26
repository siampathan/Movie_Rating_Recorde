import { Link } from "react-router-dom";
import "./header-style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular" className="items">
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" className="items">
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" className="items">
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
