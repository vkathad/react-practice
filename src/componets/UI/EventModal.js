import React, { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSubmit } from 'react-router-dom';

function EventModal(props) {
     const submit = useSubmit();

     const onSubmit = useCallback((values) => {
        console.log(values);

        // do your staff with values
        }, []);
    function handleSave(){
      
    }

  
  

  return (
   

    <>
      

      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          {/* <Button type='submit' variant="primary" onClick={onSubmit}>Understood</Button> */}
          <Button form={props.formId} type="submit"  variant="primary" >Submit form</Button> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;