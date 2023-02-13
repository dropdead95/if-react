import React, { useState, useContext } from 'react';

import { SelectDate } from './SelectDate';
import { SelectGuests } from './SelectGuests';

import { hotelsAPI } from '../../../API';
import { AvailableHotelsContext } from '../../../context/AvailableHotelsContext';

import '../../../scss/components/Form.scss';

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
        <SelectGuests />
        <button
          className="content__form_button col-lg-2 col-sm-6"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};
