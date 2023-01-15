import React from 'react';

import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <svg className={style.icon}>
      <use href="#header-logo"></use>
    </svg>
  );
};
