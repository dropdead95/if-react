import React, { createContext, Suspense, useState } from 'react';
import { CircleLoader } from 'react-spinners';

import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { Offer } from '../Offer/Offer';
import AvailableHotels from '../AvailableHotels/AvailableHotels';

export const AppContext = createContext();

export const App = () => {
  const [context, setContext] = useState({});

  return (
    <>
      <Sprite />
      <AppContext.Provider
        value={{
          context,
          setContext
        }}
      >
        <TopSection />
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
          {context.searchValue && <AvailableHotels />}
        </Suspense>
      </AppContext.Provider>

      <Offer />
      <Homes />
    </>
  );
};
