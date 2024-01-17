import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = ({ trending }) => {
  const location = useLocation();
  if (!trending) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        <h3>Trending today</h3>
        <ul>
          {trending.results.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default HomePage;
