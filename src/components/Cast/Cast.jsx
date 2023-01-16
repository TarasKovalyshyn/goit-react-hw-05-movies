import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Casts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  useEffect(() => {
    async function fetchCredits() {
      try {
        setIsLoading(true);
        setCast(await getMovieCast(Number(movieId)));
      } catch (error) {
        toast.error('we have a problem');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCredits();
  }, [movieId]);
  // console.log(movieId)
  return (
    <>
      {isLoading && <Loader />}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          marginTop: '15px',
        }}
      >
        {cast.map(({ original_name, id, profile_path, character }) => (
          <div
            key={id}
            style={{ listStyle: 'none', margin: '0 auto', maxWidth: '150px' }}
          >
            <img
              src={`${baseURL}${profile_path}`}
              alt="poster"
              width={'150px'}
            />

            <p className="text">{original_name}</p>
            <p>Character:{character}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Casts;
