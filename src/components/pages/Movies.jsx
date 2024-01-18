import React, { useState } from 'react';
import { getsearchMovies } from 'movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('sQuery');

  const handleSearch = async () => {
    try {
      const searchResultData = await getsearchMovies(searchTerm);
      setSearchResults(searchResultData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    setSearchParams({
      sQuery: searchTerm,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <h3>Search Movies</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={query}
          onChange={e => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>

      {searchResults ? (
        <ul>
          {searchResults.results.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results yet.</p>
      )}
    </div>
  );
};

export default SearchMovie;
