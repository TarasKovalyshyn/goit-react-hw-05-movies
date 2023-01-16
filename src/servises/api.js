import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '3028ceedca42b9e0e0ce8d1046bb16a1',
  language: 'en-US',
};

export const getTrandingMovies = async () => {
  const response = await axios.get(`/trending/movie/day`);
  // console.log(response);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`);
  // console.log(response);
  return response.data;
};

export const getMoviesBySearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`);
  // console.log(response.data);
  return response.data.results;
};
export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  // console.log(response.data.cast);
  return response.data.cast;
};
export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  console.log(response.data.results);
  return response.data.results;
};
