import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';

const ModalOverlay = ({ show = false, handleModal, msg, error }) => {
  return (
    <Modal show={show} onHide={(e) => handleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {error ? (
            <div className='text-danger'>There is some problem</div>
          ) : (
            <div className='text-success'>
              Your form has been sucessfully submitted
            </div>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={(e) => handleModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOverlay;
