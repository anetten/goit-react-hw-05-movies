import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'movieAPI';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(postId);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    if (postId) {
      fetchMovieReviews();
    }
  }, [postId]);

  if (!postId) {
    return <div>No reviews available</div>;
  }

  return (
    <div>
      <ul className={css.reviews_list}>
        {reviews.map(review => (
          <li className={css.reviews_item} key={review.id}>
            <h3 className={css.reviews_author}>{review.author}</h3>
            <p className={css.reviews_content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
