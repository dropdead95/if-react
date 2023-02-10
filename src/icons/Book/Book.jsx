import React from 'react';

import style from './Book.module.scss';

export const Book = () => {
  return (
    <svg className={style.icon}>
      <use href="#book"></use>
    </svg>
  );
};
