import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'movieAPI';

const CastDetails = ({ movieId }) => {
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCastDetails(credits.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    if (movieId) {
      fetchMovieCredits();
    }
  }, [movieId]);

  if (!castDetails) {
    return <div>No cast information available</div>;
  }

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {castDetails.map(member => (
          <li key={member.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${
                member.profile_path || '/no_image_available.jpg'
              }`}
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>Character: {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastDetails;
