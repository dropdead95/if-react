import React from 'react';

import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { AvailableHotels } from '../AvailableHotels';

import { AvailableHotelsContext } from '../../context/AvailableHotelsContext';

export const App = () => {
  const avHotelsRef = React.useRef(null);
  const [availableHotels, setAvailableHotels] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (availableHotels.length > 0) {
      avHotelsRef?.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [availableHotels]);

  return (
    <>
      <Sprite />
      <AvailableHotelsContext.Provider
        value={{
          availableHotels,
          setAvailableHotels,
          setIsLoading
        }}
      >
        <TopSection />
        {availableHotels.length > 0 && (
          <AvailableHotels
            ref={avHotelsRef}
            isLoading={isLoading}
            availableHotels={availableHotels}
          />
        )}
      </AvailableHotelsContext.Provider>
      <Homes />
    </>
  );
};
