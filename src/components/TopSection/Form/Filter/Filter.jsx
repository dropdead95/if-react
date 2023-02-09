import React, { useContext, useEffect, useRef } from 'react';

import { GuestsContext } from '../../../../context/GuestsContext';

import '../../../../scss/components/Form.scss';

export const Filter = ({ isOpen, onClickOutside }) => {
  const filterRef = useRef(null);

  const {
    setAdults,
    setChildren,
    setRooms,
    adults,
    children,
    rooms
  } = useContext(GuestsContext);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside,
        true
      );
    };
  }, [onClickOutside]);

  if (!isOpen) return null;
  return (
    <div ref={filterRef} className="filter__wrapper">
      <div className="filter__item">
        <p className="item__title item__title--adults">Adults</p>
        <div className="filter__item-counter">
          <button
            type="button"
            disabled={adults === 1}
            onClick={() => setAdults(prevState => prevState - 1)}
            className="filter__button--adults filter__button--dec"
          >
            -
          </button>
          <div className="filter__input-wrapper">
            <input
              className="item__counter--adults"
              value={adults}
              type="text"
              disabled="disabled"
            />
          </div>
          <button
            type="button"
            disabled={adults === 30}
            onClick={() => setAdults(prevState => prevState + 1)}
            className="filter__button--adults filter__button--inc"
          >
            +
          </button>
        </div>
      </div>
      <div className="filter__item">
        <p className="item__title item__title--children">Children</p>
        <div className="filter__item-counter">
          <button
            type="button"
            disabled={children === 0}
            onClick={() => setChildren(prevState => prevState - 1)}
            className="filter__button--children filter__button--dec filter__button--children--dec"
          >
            -
          </button>
          <div className="filter__input-wrapper">
            <input
              className="item__counter--children"
              value={children}
              type="text"
              disabled="disabled"
            />
          </div>
          <button
            type="button"
            disabled={children === 10}
            onClick={() => setChildren(prevState => prevState + 1)}
            className="filter__button--children filter__button--inc filter__button--children--inc"
          >
            +
          </button>
        </div>
      </div>
      <div className="filter__item">
        <p className="item__title item__title--rooms">Rooms</p>
        <div className="filter__item-counter">
          <button
            type="button"
            disabled={rooms === 0}
            onClick={() => setRooms(prevState => prevState - 1)}
            className="filter__button--rooms filter__button--dec"
          >
            -
          </button>
          <div className="filter__input-wrapper">
            <input
              className="item__counter--rooms"
              value={rooms}
              type="text"
              disabled="disabled"
            />
          </div>
          <button
            type="button"
            disabled={rooms === 30}
            onClick={() => setRooms(prevState => prevState + 1)}
            className="filter__button--rooms filter__button--inc"
          >
            +
          </button>
        </div>
      </div>
      {children > 0 && (
        <div className="filter__additional-content">
          <p className="filter__additional-text">
            What is the age of the child you’re travelling with?
          </p>
          {new Array(children).fill(0).map((item, i) => (
            <select className="filter__additional-select" key={i}>
              {new Array(18).fill(0).map((item, indexOption) => (
                <option key={indexOption}>
                  {indexOption} years old
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
    </div>
  );
};
