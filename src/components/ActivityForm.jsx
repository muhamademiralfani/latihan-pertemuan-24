/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ActivityForm = ({ showModal, setShowModal, onChange, onSubmit }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input type='text' className='form-control' id='title' name='title' onChange={onChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <textarea className='form-control' id='description' rows='3' name='description' onChange={onChange}></textarea>
          </div>
          <Button type='submit' variant='primary' onClick={handleClose}>
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

ActivityForm.propTypes  = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ActivityForm;
