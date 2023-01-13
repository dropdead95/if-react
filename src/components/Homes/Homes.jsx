import React from 'react';

import { Container } from '../Container';
import { HomesSlider } from './HomesSlider';

import './Homes.css';

export const Homes = () => {
  return (
    <section className="homes">
      <Container className="homes__container">
        <h2 className="title-section">Homes guests loves</h2>
        <HomesSlider />
      </Container>
    </section>
  );
};
