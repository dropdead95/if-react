import React from 'react';
import classNames from 'classnames';
import { Container } from '../Container';
import { Logo, Profile, SwitchTheme } from '../../icons';
import { Menu } from '../TopSection/Menu';

import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';
import { SignOut } from '../SignOut';

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Container className={styles['header-container']}>
        <NavLink className={styles.logo} to="/">
          <Logo />
        </NavLink>
        <Menu />
        <SwitchTheme />
        <Profile />
        <SignOut />
      </Container>
    </header>
  );
};
