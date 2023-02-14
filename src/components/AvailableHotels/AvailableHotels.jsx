import React, { useRef, useEffect, useContext } from 'react';

import { Container } from '../Container';
import { SliderAvailable } from './SliderAvailable';

import '../../scss/components/AvailableHotels.scss';
import { CircleLoader } from 'react-spinners';
import { AvailableHotelsContext } from '../../context/AvailableHotelsContext';

function AvailableHotels() {
  const availableHotelsRef = useRef(null);
  const { isLoading, availableHotels } = useContext(
    AvailableHotelsContext
  );

  useEffect(() => {
    availableHotelsRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [availableHotels, isLoading]);

  return (
    <section ref={availableHotelsRef} className="available-hotels">
      <Container className="available__container">
        <h2 className="title-section">Available Hotels</h2>
        {isLoading ? (
          <CircleLoader
            color="#1a71f4"
            cssOverride={{
              display: 'block',
              margin: '20% auto'
            }}
            size="100px"
          />
        ) : (
          <SliderAvailable availableHotels={availableHotels} />
        )}
      </Container>
    </section>
  );
}

export default AvailableHotels;
