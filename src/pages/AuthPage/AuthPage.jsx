import React, { useContext } from 'react';

import styles from './AuthPage.module.scss';

import background from '../../assets/top-section/bg-top-section.jpg';

import { Container } from '../../components/Container';
import { AppContext } from '../../components/App/App';

export const AuthPage = () => {
  const { setIsAuth } = useContext(AppContext);

  const handleSubmit = () => {
    setIsAuth(true);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className={styles.auth}
    >
      <Container>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Sign in</h1>
          <label className={styles.label} htmlFor="login">
            Login
          </label>
          <input className={styles.input} id="login" type="text" />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            id="password"
            type="password"
          />
          <button className={styles.btn} type="submit">
            Sign in
          </button>
        </form>
      </Container>
    </section>
  );
};
