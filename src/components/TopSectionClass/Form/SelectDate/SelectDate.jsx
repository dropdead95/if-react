import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './SelectDate.scss';

export const SelectDate = ({ showCalendar, isClicked }) => {
  const [value, onChange] = React.useState(new Date());

  return (
    <>
      <div
        className="check__wrapper col-lg-2 col-sm-6"
        onClick={showCalendar}
      >
        <p className="check__text">
          <span>Check-in</span> — <span>Check-out</span>
        </p>
      </div>
      {isClicked && (
        <Calendar
          className="check__calendar"
          defaultActiveStartDate={new Date()}
          onChange={onChange}
          value={value}
          goToRangeStartOnSelect={true}
        />
      )}
    </>
  );
};
