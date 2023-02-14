import React, { useState, Suspense } from 'react';
import { CircleLoader } from 'react-spinners';

import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { Offer } from '../Offer/Offer';

const AvailableHotels = React.lazy(() =>
  import('../AvailableHotels/AvailableHotels')
);

import { AvailableHotelsContext } from '../../context/AvailableHotelsContext';

export const App = () => {
  const [availableHotels, setAvailableHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Sprite />
      <AvailableHotelsContext.Provider
        value={{
          availableHotels,
          setAvailableHotels,
          setIsLoading,
          isLoading
        }}
      >
        <TopSection />
        <Offer />
        <Suspense
          fallback={
            <CircleLoader
              color="#1a71f4"
              cssOverride={{
                display: 'block',
                margin: '20% auto'
              }}
              size="100px"
            />
          }
        >
          {availableHotels.length > 0 && <AvailableHotels />}
        </Suspense>
      </AvailableHotelsContext.Provider>
      <Homes />
    </>
  );
};
