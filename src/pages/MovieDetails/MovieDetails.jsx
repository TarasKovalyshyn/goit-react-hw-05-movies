import GoBack from 'components/GoBack/GoBack';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'servises/api';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movies = await getMovieDetails(movieId);
        setMovieDetails(movies);
      } catch (error) {
        toast.error('we have a problem');
      }
    }
    fetchDetails();
  }, [movieId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <>
        <Link to={`/`}>
          <GoBack />
        </Link>
        <MovieCard info={movieDetails} />

        <Link to="cast">Cast</Link>

        <Link to="reviews">Reviews</Link>
      </>
    </div>
  );
};
export default MovieDetails;
