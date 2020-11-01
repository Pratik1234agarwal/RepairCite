import React from 'react';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import addHours from 'date-fns/addHours';
import getHours from 'date-fns/getHours';
import DateTime from '../pages/Date';

const Time = ({ date, onChange }) => {
  const [times, setTimes] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let dateObj = new Date(date);
    let currentDate = new Date();
    let start = new Date();
    start.setHours(9);
    if (isSameDay(dateObj, new Date())) {
      let hrs = currentDate.getHours();
      if (hrs > 14) {
        return setError(true);
      }
      start = new Date();
      start = addHours(start, 2);
    }
    const formatTime = (date) => {
      return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    };
    let timesArray = [];
    while (start.getHours() < 19) {
      let i = start.getHours();
      timesArray.push(
        <div key={i} class='col-md-3 sm-box'>
          <div class='styled-radio animate-fade-in styled-radio2'>
            <input
              onChange={onChange}
              type='radio'
              name='timeSlot'
              id={`timer${i}`}
              data-value={
                formatTime(start) + ' - ' + formatTime(addHours(start, 1))
              }
            />
            <label htmlFor={`timer${i}`}>
              {formatTime(start)} - {formatTime(addHours(start, 1))}
            </label>
          </div>
        </div>
      );
      start = addHours(start, 1);
      setTimes(timesArray);
      setError(false);
    }
  }, [date, setTimes, setError]);

  return (
    <div
      style={{ transition: 'all 2s' }}
      class='preference-radio mt-4 animate-fade-in'
    >
      {error ? (
        <p>
          No Time Slot available for the selected date, kindly select another
          date
        </p>
      ) : (
        <div class='row'>{times}</div>
      )}
    </div>
  );
};

export default Time;
