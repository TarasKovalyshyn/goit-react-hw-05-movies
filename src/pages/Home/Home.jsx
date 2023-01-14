import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'servises/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getTrandingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();

  }, []);
  return (
    <>
      <h2>Trending movie</h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {trendingMovies.map(({ id, title }) => {
          return (
            <Link to={`/movies/${id}`} key={id}>
              {title} 
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Home;
