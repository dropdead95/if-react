import React from 'react';

import style from './Arrow.module.scss';

export const Arrow = () => {
  return (
    <svg className={style.icon}>
      <use href="#arrow-btn"></use>
    </svg>
  );
};
