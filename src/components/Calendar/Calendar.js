//@ts-check
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, ListGroup }  from 'react-bootstrap';

import * as fndate from '../../utils/dateHelpers';
import Week from './Week';
const Calendar = () => {
  const days = fndate.getWeekDays();
  const { currentDate, selectedDate } = useSelector( state => state.date );
  const weeks = fndate.getWeeks(selectedDate);
  console.log(weeks)
  return(
      <Container>
      <Row>
          <ListGroup className="w-100" horizontal>
            {days.map(day => <ListGroup.Item key={`${day}`} action variant="info">{day}</ListGroup.Item>)}
          </ListGroup>
      </Row>
      {weeks.map(week => <Week key={week}
        startOfTheWeek={week}
        selectedDate={selectedDate}
        currentDate={currentDate}/>)}
      </Container>
  )
}

export default Calendar;