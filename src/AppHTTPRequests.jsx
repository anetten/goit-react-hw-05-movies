import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'movieAPI';

import css from 'AppHTTPRequests.module.css';

import Home from 'components/pages/Home';
import MovieDetails from 'components/pages/MovieDetails';
import Movies from 'components/pages/Movies';
import Cast from 'components/pages/Cast';
import Reviews from 'components/pages/Reviews';

export default function AppHTTPRequests() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingData = await getTrending();
        setTrending(trendingData);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main className={css.main}>
        <Routes>
          <Route path="/" element={<Home trending={trending} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:postId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
