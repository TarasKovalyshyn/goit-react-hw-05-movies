import './MovieCard.style.css';
const MovieCard = ({ info }) => {
  const {
    original_title,
    poster_path,
    genres,
    overview,
    vote_average,
    release_date,
  } = info;
  const baseURL = 'https://image.tmdb.org/t/p/w300';

  return (
    <div className="card_container">
      <div>
        <img src={`${baseURL}${poster_path}`} alt={original_title} />
      </div>

      <div className="details">
        <h1>{original_title}</h1>

        <p>
          <span className="text">Overvie: </span> {overview}
        </p>
        <p>
          <span className="text">Points:</span> {vote_average} / 10
        </p>
        <p>
          <span className="text">Release date:</span> {'  ' + release_date}
        </p>

        <span className="text"> Genre:</span>

        {genres
          ? genres.map((genre, index) => (
              <p key={index} className="genre_item">
                {genre.name + ','}
              </p>
            ))
          : 'Genres is not available'}
      </div>
    </div>
  );
};
export default MovieCard;
