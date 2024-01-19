import React, { useCallback, useEffect, useState } from 'react';
import { getsearchMovies } from 'movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('sQuery');
  const [searchTerm, setSearchTerm] = useState(query ?? '');

  const handleSearch = useCallback(async () => {
    try {
      const searchResultData = await getsearchMovies(searchTerm);
      setSearchResults(searchResultData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    setSearchParams({
      sQuery: searchTerm,
    });
  }, [searchTerm, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    if (query) {
      // setSearchTerm(query);
      handleSearch();
    }
  }, [query, handleSearch]);

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
