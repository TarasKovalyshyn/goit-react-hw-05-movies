import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ list, name }) => {
  const location = useLocation();
  const baseURL = 'https://image.tmdb.org/t/p/w300';
 
  return (
    <div className="container">
      <h2 className="title">List by request "{name}"</h2>

      <div className="list">
        {list.length > 0 &&
          list.map(({ id, title, poster_path }) => {
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
export default MoviesList;
