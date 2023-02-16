import React, { createContext, useContext, useState } from 'react';

import { SelectDate } from './SelectDate';
import { SelectGuests } from './SelectGuests';

import '../../../scss/components/Form.scss';
import { AppContext } from '../../App/App';

export const FormContext = createContext();

export const Form = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedDate, onChange] = React.useState(null);
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);
  const { setContext } = useContext(AppContext);

  const onInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setContext({ searchValue, selectedDate, adults, kids, rooms });
  };

  return (
    <>
      <form className="content__form" onSubmit={handleSubmit}>
        <input
          value={searchValue}
          onChange={onInputChange}
          className="content__form_destination col-lg-5 col-sm-6"
          id="destination"
          name="destination"
          type="text"
          placeholder="Your destination or hotel name"
        />
        <FormContext.Provider
          value={{
            selectedDate,
            onChange,
            adults,
            setAdults,
            kids,
            setKids,
            rooms,
            setRooms
          }}
        >
          <SelectDate />
          <SelectGuests />
        </FormContext.Provider>
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
