import React from 'react';

import styles from './Profile.module.scss';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  return (
    <NavLink to="sign-in" className={styles.active}>
      <svg className={styles.icon}>
        <use href="#account-icon"></use>
      </svg>
    </NavLink>
  );
};
