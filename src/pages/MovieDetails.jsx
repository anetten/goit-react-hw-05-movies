import { getMovieDetails } from 'movieAPI';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import css from './MovieDetails.module.css';
import Loading from 'components/loader/loader';

const MovieDetails = () => {
  const { postId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/home');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(postId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [postId]);

  if (!movieDetails) {
    return <Loading />;
  }
  const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <div>
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>
      <div className={css.container}>
        <img src={posterUrl} alt={movieDetails.title} height="550" />
        <div className={css.details_container}>
          <h2 className={css.movie_title}>{movieDetails.title}</h2>
          <p className={css.paragraph}>
            User Score: {movieDetails.vote_average}%
          </p>
          <h3 className={css.sub_title}>Overview</h3>
          <p className={css.paragraph}>{movieDetails.overview}</p>
          <h3 className={css.sub_title}>Genres</h3>
          <ul className={css.genre_list}>
            {movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.info_container}>
        <h3 className={css.info_title}>Additional information</h3>
        <ul className={css.extra}>
          <li>
            <Link className={css.extra_link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.extra_link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
