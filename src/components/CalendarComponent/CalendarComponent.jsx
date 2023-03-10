import React, { useEffect, useRef } from 'react';
import { bool, func, array } from 'prop-types';
import Calendar from 'react-calendar';

export const CalendarComponent = ({
  showCalendar,
  value,
  onChange,
  onClickOutside
}) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
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

  if (!showCalendar) return null;
  return (
    <div ref={calendarRef}>
      <Calendar
        selectRange={true}
        showDoubleView={true}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

CalendarComponent.propTypes = {
  showCalendar: bool,
  value: array,
  onChange: func,
  onClickOutside: func
};
