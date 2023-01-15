import { useState } from 'react';
import { toast } from 'react-toastify';
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (query === '') {
      return toast.error('Рядок пошуку пустий !');
    }

    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleNameChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
