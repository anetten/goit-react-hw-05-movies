import axios from 'axios';

const API_KEY = '33ac6001e266ec79909a06427e3220ad';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  api_key: API_KEY,
  AUTH_TOKEN:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2FjNjAwMWUyNjZlYzc5OTA5YTA2NDI3ZTMyMjBhZCIsInN1YiI6IjY1YTQ4ZDU4MjY2Nzc4MDEyODY0YTIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-wfRIm2o7GRHXB_c4RT8WgTJ5Tmrbg6FE5g3RC4zXI',
};
axios.defaults.headers.common['Authorization'] = options.AUTH_TOKEN;

export const getTrending = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getsearchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
