// @ts-check
import React from 'react';
import { Row, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  isSameDay, isSameMonth, isSameWeek, format as formatFn,
} from 'date-fns';

import * as fndate from '../../utils/dateHelpers';
import Day from './Day';

const Week = (props) => {
  const { startOfTheWeek } = props;
  const days = fndate.getDays(startOfTheWeek);
  const { selectedDate, currentDate } = useSelector((state) => state.date);

  return (
    <Row>
      <ListGroup className="w-100" horizontal>
        {days.map((day) => (
          <Day key={`${fndate.getDayNumber(day)}`} day={day} selectedDate={selectedDate} currentDate={currentDate} />
        ))}
      </ListGroup>
    </Row>
  );
};

export default Week;
