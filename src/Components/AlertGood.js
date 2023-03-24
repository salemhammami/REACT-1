import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertGood() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </Container>
  );
}


export default AlertGood