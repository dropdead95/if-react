import React, { useState } from 'react';

import { Filter } from '../Filter';
import { GuestsContext } from '../../../../context/GuestsContext';

import './SelectGuests.scss';

export const SelectGuests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="guests__wrapper"
      >
        <p className="guests__text">
          {adults} Adults — {children} Children — {rooms} Room
        </p>
      </div>
      {isOpen && (
        <GuestsContext.Provider
          value={{
            adults,
            setAdults,
            children,
            setChildren,
            rooms,
            setRooms
          }}
        >
          <Filter
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
          />
        </GuestsContext.Provider>
      )}
    </>
  );
};
