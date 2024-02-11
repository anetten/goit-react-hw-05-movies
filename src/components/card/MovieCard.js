import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

const MovieCard = ({ movie, location }) => (
  <div className={css.card}>
    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className={css.title}>{movie.title}</h3>
    </Link>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieCard;
