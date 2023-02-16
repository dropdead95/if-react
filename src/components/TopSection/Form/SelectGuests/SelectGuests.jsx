import React, { useState, memo, useContext } from 'react';

import { Filter } from '../Filter';
import { GuestsContext } from '../../../../context/GuestsContext';

import './SelectGuests.scss';
import { FormContext } from '../Form';

export const SelectGuests = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const { adults, setAdults, kids, setKids, rooms, setRooms } =
    useContext(FormContext);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="guests__wrapper"
      >
        <p className="guests__text">
          {adults} Adults — {kids} Children — {rooms} Room
        </p>
      </div>
      {isOpen && (
        <GuestsContext.Provider
          value={{
            adults,
            setAdults,
            kids,
            setKids,
            rooms,
            setRooms,
            isOpen
          }}
        >
          <Filter onClickOutside={() => setIsOpen(false)} />
        </GuestsContext.Provider>
      )}
    </>
  );
});

SelectGuests.displayName = 'SelectGuests';
