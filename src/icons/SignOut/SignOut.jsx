import React from 'react';

import style from './SignOut.module.scss';

export const SignOut = () => {
  return (
    <svg className={style.icon}>
      <use href="#sign-out"></use>
    </svg>
  );
};
