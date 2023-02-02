import React from 'react';

import { Container } from '../Container';
import { SliderHomes } from './SliderHomes';

import '../../scss/components/Homes.scss';
import { hotelsAPI } from '../../API';

export const Homes = () => {
  const [hotels, setHotels] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    hotelsAPI.getHotels().then(hotels => {
      setHotels(hotels);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="homes">
      <Container className="homes__container">
        <h2 className="title-section">Homes Guests Loves</h2>
        <SliderHomes isLoading={isLoading} hotels={hotels} />
      </Container>
    </section>
  );
};
