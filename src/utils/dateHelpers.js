import {
    eachDayOfInterval,
    eachWeekOfInterval,
    endOfMonth,
    endOfWeek,
    format as formatFn,
    startOfMonth,
    startOfWeek,
  } from 'date-fns';


  export const getDayNumber = (date = new Date()) => formatFn(date, 'd');

  export const getDays = (date = new Date()) => eachDayOfInterval(
      {
          start: startOfWeek(date),
          end: endOfWeek(date),
      }
  )

  export const getWeeks = (date = new Date()) => eachWeekOfInterval(
      {
          start: startOfMonth(date),
          end: endOfMonth(date)
      }
  )

  export const getWeekDays = (date = new Date(), format = 'EEEE') => {
    const arr = eachDayOfInterval(
      {
        start: startOfWeek(date),
        end: endOfWeek(date),
      },
    );
    return arr.reduce((accum, day) => [...accum, formatFn(day, format)], []);
  };