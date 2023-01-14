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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleNameChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
