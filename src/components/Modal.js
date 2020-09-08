// @ts-check
import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { Modal, Spinner, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import actions from '../actions';

const AddModal = (props) => {
  const dispatch = useDispatch();
  const { modal } = props;

  const generateOnSubmit = () => async (values) => {
      const { todo } = values;
      dispatch(actions.addTodo({todo}))
      dispatch(actions.modalHide())
  };

  const closeModal = () => {
    dispatch(actions.modalHide());
  };

  const form = useFormik({
    onSubmit: generateOnSubmit(),
    initialValues: { todo: '' },
    validateOnBlur: false,
  });


  return (
    <Modal show={modal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-inline mb-3" onSubmit={form.handleSubmit}>
          <div className="input-group flex-row w-100">
            <input type="text" name="todo" placeholder='todo' onChange={form.handleChange} onBlur={form.handleBlur} value={form.values.name} className="form-control" />
            <div className="input-group-prepend">
              <button type="submit" disabled={form.isValidating || form.isSubmitting} className=" btn btn-primary btn-sm">
                {form.isSubmitting ? <Spinner animation="border" /> : 'AddToDO'}
              </button>
            </div>
          </div>
        </form>
        {form.touched.name && form.errors.name ? (
          <Alert variant="danger">{form.errors.name}</Alert>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;