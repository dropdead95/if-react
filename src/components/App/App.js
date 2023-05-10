import React, {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useRef
} from 'react';

import { CircleLoader } from 'react-spinners';

import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { Offer } from '../Offer/Offer';
import { AvailableHotels } from '../AvailableHotels';
import { SystemLayoutContext } from '../../pages/SystemLayout';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const App = () => {
  const { context } = useContext(SystemLayoutContext);
  const navigate = useNavigate();
  const availableHotelsRef = useRef(null);

  useEffect(() => {
    if (!context.user) {
      navigate('sign-in');
    }
  }, [context.user]);

  return (
    <AppContext.Provider
      value={{
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
      <Offer />
      <Homes />
    </AppContext.Provider>
  );
};
