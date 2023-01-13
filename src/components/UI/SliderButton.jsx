import React from 'react';

import style from './SliderButton.module.css';

export const SliderButton = () => {
  return (
    <div className={style.wrapper}>
      <svg className={style.icon}>
        <use href="#arrow-btn"></use>
      </svg>
    </div>
  );
};
