import React, { useCallback, useEffect, useState } from 'react';
import { getsearchMovies } from 'movieAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import MovieCard from 'components/card/MovieCard';

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
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Search Movies🔍</h3>
      <form className={css.form} onSubmit={handleSubmit}>
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
        <ul className={css.cardList}>
          {searchResults.results.map(movie => (
            <li key={movie.id}>
              <MovieCard movie={movie} location={location} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noSearch}>No search results yet.</p>
      )}
    </div>
  );
};

export default SearchMovie;
