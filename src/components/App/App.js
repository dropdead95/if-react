import React, {
  createContext,
  useState,
  Suspense,
  useRef
} from 'react';

import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { Offer } from '../Offer/Offer';
import { AvailableHotels } from '../AvailableHotels';
import { CircleLoader } from 'react-spinners';

export const AppContext = createContext();

export const App = () => {
  const [context, setContext] = useState({});
  const availableHotelsRef = useRef(null);

  return (
    <>
      <Sprite />
      <AppContext.Provider
        value={{
          context,
          setContext,
          availableHotelsRef
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
          {context.searchValue && (
            <AvailableHotels ref={availableHotelsRef} />
          )}
        </Suspense>
      </AppContext.Provider>

      <Offer />
      <Homes />
    </>
  );
};
