import React from 'react';

import style from './AppStore.modules.scss';

export const AppStore = () => {
  return (
    <svg className={style.icon}>
      <use href="#appstore-icon"></use>
    </svg>
  );
};
