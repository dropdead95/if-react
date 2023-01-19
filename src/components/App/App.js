import React from 'react';

import { Sprite } from '../Sprite';
import { TopSection } from '../TopSection';
import { Homes } from '../Homes';
import { AvailableHotels } from '../AvailableHotels';


import { data } from '../Homes/homesData';
import { NotFound } from '../NotFound';

function App() {
  const [value, setValue] = React.useState('');
  const [availableHotels, setAvailableHotels] = React.useState([]);

  return (
    <>
      <Sprite />
      <TopSection
        value={value}
        setValue={setValue}
        hotels={data}
        setAvailableHotels={setAvailableHotels}
      />
      {availableHotels.length > 0 && (
        <AvailableHotels availableHotels={availableHotels} />
      )}
      {value !== '' && availableHotels.length === 0 ? (
        <NotFound />
      ) : null}
      <Homes hotels={data} />
    </>
  );
}

export default App;
