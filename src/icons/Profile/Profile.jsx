import React from 'react';

import style from './Profile.module.scss';

export const Profile = () => {
  return (
    <svg className={style.icon}>
      <use href="#account-icon"></use>
    </svg>
  );
};
