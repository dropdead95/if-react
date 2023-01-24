import React from 'react';

import { Container } from '../Container';
import { SliderAvailable } from './SliderAvailable';

import '../../scss/components/AvailableHotels.scss';

export function AvailableHotels({ availableHotels }) {
  return (
    <section className="available-hotels">
      <Container className="available__container">
        <h2 className="title-section">Available Hotels</h2>
        <SliderAvailable availableHotels={availableHotels} />
      </Container>
    </section>
  );
}
