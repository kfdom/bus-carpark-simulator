import React from 'react';
import TextInput from './formElements/TextInput';
import Button from './formElements/Button';
import FormContainer from './formElements/FormContainer';

const BusMovementInputSec = () => {
  return (
    <FormContainer
      onKeyPress={event => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
      }}
    >
      <h3>Movements</h3>

      <div className="form-group row">
        <div className="col-md-3">
          <TextInput placeholder="Add New Movement" />
        </div>
        <div className="col-md-3">
          <Button className={'btn btn-primary'}>Add</Button>
        </div>
      </div>
    </FormContainer>
  );
};

export default BusMovementInputSec;
