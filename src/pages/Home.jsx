import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import MovieCard from 'components/card/MovieCard';
import Loading from 'components/loader/loader';

const HomePage = ({ trending }) => {
  const location = useLocation();
  if (!trending) {
    return <Loading />;
  } else {
    return (
      <div className={css.container}>
        <h3 className={css.title}>Trending today💫</h3>
        <ul className={css.cardList}>
          {trending.results.map(movie => (
            <li key={movie.id}>
              <MovieCard movie={movie} location={location} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default HomePage;
