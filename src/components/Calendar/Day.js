// @ts-check
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import {
  isSameDay, isSameMonth, isSameWeek, format as formatFn,
} from 'date-fns';

import * as fndate from '../../utils/dateHelpers';
import actions from '../../actions';

const Day = (props) => {
    const dispatch = useDispatch();
    const { currentDate, selectedDate, day } = props;
    const handleClick = (day) => {
        const date = new Date(day);
        isSameDay(date, selectedDate) ? null : dispatch(actions.selectDate(date));
    };

    const handleModal = () => {
        dispatch(actions.modalShow());
    }

    const renderButtons = (day) => {
      if(!isSameDay(day, selectedDate)){
          return null
      } 
      return (
          <>
            <Button onClick={handleModal} variant="primary">
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
            <Button variant="warning">
                <FontAwesomeIcon icon={faEye}/>
            </Button>
          </>
      )
    }
    return(
            <ListGroup.Item as='li'
                onClick={() => { handleClick(day); }}
                disabled={!isSameMonth(day, currentDate)}
                className="d-flex justify-content-between align-center"
                action
                variant={isSameDay(day, currentDate) ? 'primary' : 'info'}
            >
                {fndate.getDayNumber(day)}
                {renderButtons(day)}
            </ListGroup.Item>
    )

}

export default Day;