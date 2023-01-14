import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { getMoviesBySearch } from 'servises/api';

const Movies = () => {
  const [searchFilmList, setSearchFilmList] = useState([]);



  useEffect(() => {
   
    async function movieSearch() {
      try {
        const list = await getMoviesBySearch('titanic');
        setSearchFilmList(list);
      } catch (error) {
        toast.error('we have a problem');
      }
    }

    movieSearch();
  }, []);



  return (
    <>
      <SearchBar />
    </>
  );
};
export default Movies;
