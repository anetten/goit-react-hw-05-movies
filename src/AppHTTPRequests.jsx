import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'movieAPI';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('components/pages/Home'));
const MovieDetails = lazy(() => import('components/pages/MovieDetails'));
const Movies = lazy(() => import('components/pages/Movies'));
const Cast = lazy(() => import('components/pages/Cast'));
const Reviews = lazy(() => import('components/pages/Reviews'));

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
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home trending={trending} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:postId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
