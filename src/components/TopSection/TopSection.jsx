import React, { useRef } from 'react';

import { Container } from '../Container';
import { Form } from './Form';

import background from './../../assets/top-section/bg-top-section.jpg';

//icons
import { AppStore, GooglePlay } from '../../icons';

//style
import '../../scss/components/TopSection.scss';
import { Header } from '../Header';

export const TopSection = () => {
  const topSectionRef = useRef(null);

  return (
    <section
      ref={topSectionRef}
      className="top-section"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container className="top-section__container">
        <Header />
        <div className="top-section__content">
          <h1 className="content__title">
            <span>Discover stays</span>{' '}
            <span>to live, work or just relax</span>
          </h1>
          <Form ref={topSectionRef} />
          <div className="content__download">
            <GooglePlay />
            <AppStore />
          </div>
        </div>
      </Container>
    </section>
  );
};
