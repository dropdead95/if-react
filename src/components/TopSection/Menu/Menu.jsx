import React from 'react';

import style from './Menu.module.scss';

export const Menu = () => {
  return (
    <nav className={style.menu}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href="#">
            Stays
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="#">
            Attractions
          </a>
        </li>
      </ul>
    </nav>
  );
};
