import React from 'react';

import empty from '../../assets/empty.gif';

import style from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>NO AVAILABLE HOTELS</p>
      <div className={style.imgWrapper}>
        <img className={style.img} src={empty} alt="empty" />
      </div>
    </div>
  );
};
