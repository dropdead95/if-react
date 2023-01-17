import React from 'react';

import style from './SwitchTheme.module.scss';

export const SwitchTheme = () => {
  return (
    <svg className={style.icon}>
      <use href="#night-icon"></use>
    </svg>
  );
};
