import React, { useContext, forwardRef } from 'react';
// import { CircleLoader } from 'react-spinners';

import { Container } from '../Container';
import { SliderAvailable } from './SliderAvailable';

import { fetchData, wrapPromise } from '../../utils/wrapPromise';

import '../../scss/components/AvailableHotels.scss';

import { SystemLayoutContext } from '../../pages/SystemLayout';

export const AvailableHotels = forwardRef((props, ref) => {
  const { context } = useContext(SystemLayoutContext);

  const availableHotelsRequest = wrapPromise(
    fetchData('hotels', context.searchValue)
  );

  return (
    <section ref={ref} className="available-hotels">
      <Container className="available__container">
        <h2 className="title-section">Available Hotels</h2>
        <SliderAvailable availableHotels={availableHotelsRequest} />
      </Container>
    </section>
  );
});

AvailableHotels.displayName = 'AvailableHotels';
