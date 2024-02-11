import React from 'react';
import css from './loader.module.css';

const Loading = () => {
  return (
    <div className={css.loadingContainer}>
      <div className={css.loading}></div>
    </div>
  );
};

export default Loading;
