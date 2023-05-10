import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './AuthPage.module.scss';

import background from '../../assets/top-section/bg-top-section.jpg';

import { Container } from '../../components/Container';
import { SystemLayoutContext } from '../SystemLayout';

export const AuthPage = () => {
  const { context, setContext } = useContext(SystemLayoutContext);
  const navigate = useNavigate();
  console.log(navigate);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    setContext({
      user: {
        login: formData.get('login'),
        password: formData.get('password')
      }
    });
    navigate('/');
  };
  console.log(context);

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
            className={styles.input}
            required
            id="login"
            type="text"
            name="login"
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            required
            id="password"
            type="password"
            name="password"
          />
          <button className={styles.btn} type="submit">
            Sign in
          </button>
        </form>
      </Container>
    </section>
  );
};
