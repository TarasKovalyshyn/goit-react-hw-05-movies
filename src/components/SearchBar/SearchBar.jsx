import { useState } from 'react';
import { toast } from 'react-toastify';

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (query === '') {
      return toast.error('Enter something in the search !');
    }
    onSubmit(query);
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
      <button className="button" type="submit">
        <span className="button_text">Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
