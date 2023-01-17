import React from 'react';

import style from './Search.module.scss';

export const Search = () => {
  return (
    <svg className={style.icon}>
      <use href="#search"></use>
    </svg>
  );
};
