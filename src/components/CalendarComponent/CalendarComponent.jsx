import React, { useEffect } from 'react';
import Calendar from 'react-calendar';

export const CalendarComponent = ({
  showCalendar,
  value,
  onChange,
  onClickOutside
}) => {
  const calendarRef = React.useRef(null);

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
