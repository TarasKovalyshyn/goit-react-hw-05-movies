import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'servises/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

import './Home.styles.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setTrendingMovies(await getTrandingMovies());
      } catch (error) {
        toast.error('we have a problem');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div className="container">
      <h2 className="title">Trending movie</h2>
      {isLoading && <Loader />}
      <div className="list">
        {trendingMovies.length > 0 &&
          trendingMovies.map(({ id, title, poster_path }) => {
            return (
              <Link
                className="link"
                to={`/movies/${id}`}
                key={id}
                state={{ from: location }}
              >
                <img
                  className="img"
                  src={`${baseURL}${poster_path}`}
                  alt={title}
                />
                <h2 className="text">{title}</h2>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
