import React, { useState, useContext } from 'react';

import { SelectDate } from './SelectDate';

import '../../../scss/components/Form.scss';

import { hotelsAPI } from '../../../API';
import { AvailableHotelsContext } from '../../../context/AvailableHotelsContext';

export const Form = () => {
  const [value, setValue] = useState('');

  const { setAvailableHotels, setIsLoading } = useContext(
    AvailableHotelsContext
  );

  const onInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    hotelsAPI.searchAvailableHotels(value).then(availableHotels => {
      setAvailableHotels(availableHotels);
      setIsLoading(false);
    });
  };

  return (
    <>
      <form className="content__form" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={onInputChange}
          className="content__form_destination col-lg-5 col-sm-6"
          id="destination"
          name="destination"
          type="text"
          placeholder="Your destination or hotel name"
        />
        <SelectDate />
        <div className="select__wrapper col-lg-3 col-sm-6">
          <div className="input-wrapper">
            <input
              className="content__form_adults select-item col-lg-4"
              id="adults"
              value="1Adults"
              name="adults"
              disabled="disabled"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="content__form_children select-item col-lg-4"
              id="children"
              value="0Children"
              name="children"
              disabled="disabled"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="content__form_room select-item col-lg-4"
              id="rooms"
              value="1Rooms"
              name="room"
              disabled="disabled"
            />
          </div>
        </div>
        <button
          className="content__form_button col-lg-2 col-sm-6"
          type="submit"
        >
          Search
        </button>
        <div className="filter__wrapper hide">
          <div className="filter__item">
            <p className="item__title item__title--adults">Adults</p>
            <div className="filter__item-counter">
              <button className="filter__button--adults filter__button--dec">
                -
              </button>
              <div className="filter__input-wrapper">
                <input
                  className="item__counter--adults"
                  value="1"
                  type="text"
                  disabled="disabled"
                />
              </div>
              <button className="filter__button--adults filter__button--inc">
                +
              </button>
            </div>
          </div>
          <div className="filter__item">
            <p className="item__title item__title--children">
              Children
            </p>
            <div className="filter__item-counter">
              <button className="filter__button--children filter__button--dec filter__button--children--dec">
                -
              </button>
              <div className="filter__input-wrapper">
                <input
                  className="item__counter--children"
                  value="0"
                  type="text"
                  disabled="disabled"
                />
              </div>
              <button className="filter__button--children filter__button--inc filter__button--children--inc">
                +
              </button>
            </div>
          </div>
          <div className="filter__item">
            <p className="item__title item__title--rooms">Rooms</p>
            <div className="filter__item-counter">
              <button className="filter__button--rooms filter__button--dec">
                -
              </button>
              <div className="filter__input-wrapper">
                <input
                  className="item__counter--rooms"
                  value="1"
                  type="text"
                  disabled="disabled"
                />
              </div>
              <button className="filter__button--rooms filter__button--inc">
                +
              </button>
            </div>
          </div>
          <div className="filter__additional-content hide">
            <p className="filter__additional-text">
              What is the age of the child you’re travelling with?
            </p>
          </div>
        </div>
      </form>
    </>
  );
};
