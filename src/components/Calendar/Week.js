//@ts-check
import React from 'react';
import { Row, ListGroup }  from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { isSameDay, isSameMonth, isSameWeek, format as formatFn } from 'date-fns';

import * as fndate from '../../utils/dateHelpers';
import actions from '../../actions';

const Week = (props) => {
  const {startOfTheWeek, currentDate, selectedDate } = props;
  const dispatch = useDispatch();
  const days = fndate.getDays(startOfTheWeek);

  const handleClick = (day) => {
    const date = new Date(day);
    dispatch(actions.selectDate(date))
  }
  return (
    <Row>
        <ListGroup className="w-100" horizontal>
          {days.map(day => 
          <ListGroup.Item
            onClick={() => { handleClick(day) }}
            disabled={!isSameMonth(day, currentDate)} 
            key={`${fndate.getDayNumber(day)}`} 
            action 
            variant={isSameDay(day, currentDate) ? "primary" : "info"}>
                {fndate.getDayNumber(day)}
          </ListGroup.Item>)}
        </ListGroup>
    </Row>
  )
}

export default Week;