import React from 'react';

import './SelectDate.scss';

import { CalendarComponent } from '../../../CalendarComponent';

export const SelectDate = () => {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [value, onChange] = React.useState(null);

  return (
    <>
      <CalendarComponent
        showCalendar={showCalendar}
        value={value}
        onChange={onChange}
        onClickOutside={() => setShowCalendar(false)}
      />
      <div
        onClick={() => setShowCalendar(true)}
        className="check__wrapper col-lg-2 col-sm-6"
      >
        <p className="check__text">
          <span>
            {value
              ? value[0].toLocaleString().slice(0, 10)
              : 'Check-in'}
          </span>
          -
          <span>
            {value
              ? value[1].toLocaleString().slice(0, 10)
              : 'Check-out'}
          </span>
        </p>
      </div>
    </>
  );
};
