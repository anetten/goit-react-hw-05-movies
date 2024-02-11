import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'movieAPI';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { postId } = useParams(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(postId);
        setCast(credits.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    if (postId) {
      fetchMovieCredits();
    }
  }, [postId]);

  if (!postId) {
    return <div>No cast information available</div>;
  }

  return (
    <div>
      <ul className={css.cast_list}>
        {cast.map(member => (
          <li className={css.cast_item} key={member.id}>
            <img
              className={css.cast_img}
              src={`https://image.tmdb.org/t/p/w200${
                member.profile_path || '/no_image_available.jpg'
              }`}
              alt={member.name}
            />
            <p className={css.cast_name}>{member.name}</p>
            <p className={css.cast_char}>Character: {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
