import React, { useContext, Suspense, forwardRef } from 'react';
import { CircleLoader } from 'react-spinners';

import { Container } from '../Container';
import { SliderAvailable } from './SliderAvailable';

import { fetchData, wrapPromise } from '../../utils/wrapPromise';

import '../../scss/components/AvailableHotels.scss';

import { AppContext } from '../App/App';

export const AvailableHotels = forwardRef((props, ref) => {
  const { context } = useContext(AppContext);

  const availableHotelsRequest = wrapPromise(
    fetchData('hotels', context.searchValue)
  );

  return (
    <Suspense
      fallback={
        <CircleLoader
          color="#1a71f4"
          cssOverride={{
            display: 'block',
            margin: '10% auto'
          }}
          size="100px"
        />
      }
    >
      <section ref={ref} className="available-hotels">
        <Container className="available__container">
          <h2 className="title-section">Available Hotels</h2>
          <SliderAvailable
            availableHotels={availableHotelsRequest}
          />
        </Container>
      </section>
    </Suspense>
  );
});

AvailableHotels.displayName = 'AvailableHotels';
