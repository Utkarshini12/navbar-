import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';





const EndModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  

  

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>End Class</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Select a reason to end class</ModalHeader>
        <ModalBody>
        <FormGroup tag="fieldset" row>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Class completed
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Class interrupted/aborted
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Student didn't show up for class
            </Label>
          </FormGroup> <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
             Student didn't show any interest
            </Label>
          </FormGroup> <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Student got disconnected
            </Label>
          </FormGroup> <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              I got disconnected
            </Label>
          </FormGroup>
          
        </Col>
      </FormGroup>
      <FormGroup row>
       
        <Col sm={12}>
            <Label>Other</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
        </ModalBody>

       
        <ModalFooter>
          <Button color="danger" onClick={toggle}>End Class</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EndModal;