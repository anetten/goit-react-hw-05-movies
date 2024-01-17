import React, { useState } from 'react';
import { getsearchMovies } from 'movieAPI';
import { Link } from 'react-router-dom';

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const searchResultData = await getsearchMovies(searchTerm);
      setSearchResults(searchResultData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h3>Search Movies</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults ? (
        <ul>
          {searchResults.results.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          ))}
        </ul>
      ) : (
        <p>No search results yet.</p>
      )}
    </div>
  );
};

export default SearchMovie;
