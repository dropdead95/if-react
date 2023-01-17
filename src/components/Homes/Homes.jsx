import React from 'react';

import { Container } from '../Container';
import { SliderHomes } from './SliderHomes';

import '../../scss/components/Homes.scss';

export const Homes = ({ hotels }) => {
  return (
    <section className="homes">
      <Container className="homes__container">
        <h2 className="title-section">Homes Guests Loves</h2>
        <SliderHomes hotels={hotels} />
      </Container>
    </section>
  );
};
