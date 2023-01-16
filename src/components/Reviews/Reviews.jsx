import { getMovieReviews } from 'servises/api';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCredits() {
      try {
        setIsLoading(true);
        setReviews(await getMovieReviews(Number(movieId)));
      } catch (error) {
        toast.error('we have a problem');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCredits();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length !== 0 ? (
        <div>
          {reviews.map(({ author, content, id }) => (
            <div key={id} style={{ paddingRight: '30px' }}>
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>We don`t have any reviews yet</p>
      )}
    </>
  );
};
export default Reviews;
