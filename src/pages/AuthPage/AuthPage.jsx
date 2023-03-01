import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

import styles from './AuthPage.module.scss';

import background from '../../assets/top-section/bg-top-section.jpg';

import { Container } from '../../components/Container';

export const AuthPage = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState(null);
  console.log(user);

  if (user) {
    return <Navigate to="/" />;
  }

  const handleLoginChange = e => {
    setLogin(e.target.value);
  };

  const handleLoginDebouncedChange = useCallback(
    debounce(handleLoginChange, 500),
    []
  );

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handlePasswordDebouncedChange = useCallback(
    debounce(handlePasswordChange, 500),
    []
  );

  const handleSubmit = e => {
    e.preventDefault();
    setUser({ login, password });
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
          <input
            onChange={handleLoginDebouncedChange}
            className={styles.input}
            required
            id="login"
            type="text"
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            onChange={handlePasswordDebouncedChange}
            className={styles.input}
            required
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
