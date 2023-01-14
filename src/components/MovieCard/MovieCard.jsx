const MovieCard = ({ info }) => {
  const { title, poster_path } = info;
  const baseURL = 'https://image.tmdb.org/t/p/w300/';
  return (
    <>
      <h2>{title}</h2>
      <img src={`${baseURL}${poster_path}`} alt={title} width="300" />
      <p></p>
    </>
  );
};
export default MovieCard;
