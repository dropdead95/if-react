import React, { memo, useContext, useState } from 'react';

import './SelectDate.scss';

import { CalendarComponent } from '../../../CalendarComponent';
import { FormContext } from '../Form';

export const SelectDate = memo(() => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { selectedDate, onChange } = useContext(FormContext);

  return (
    <>
      <CalendarComponent
        showCalendar={showCalendar}
        value={selectedDate}
        onChange={onChange}
        onClickOutside={() => setShowCalendar(false)}
      />
      <div
        onClick={() => setShowCalendar(true)}
        className="check__wrapper col-lg-2 col-sm-6"
      >
        <p className="check__text">
          <span>
            {selectedDate
              ? selectedDate[0].toLocaleString().slice(0, 10)
              : 'Check-in'}
          </span>
          -
          <span>
            {selectedDate
              ? selectedDate[1].toLocaleString().slice(0, 10)
              : 'Check-out'}
          </span>
        </p>
      </div>
    </>
  );
});

SelectDate.displayName = 'SelectDate';
