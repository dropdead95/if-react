import React from 'react';

import style from './Reviews.module.scss';

export const Reviews = () => {
  return (
    <svg className={style.icon}>
      <use href="#reviews"></use>
    </svg>
  );
};
