import React, { useState, useRef } from 'react';
import TextInput from './formElements/TextInput';
import Button from './formElements/Button';
import FormContainer from './formElements/FormContainer';

const BusMovementInputSec = () => {
  const [movement, setMovement] = useState([]);
  const [newOnChangeMovement, setNewOnChangeMovement] = useState('');
  const [editMovementIndex, setEditMovementIndex] = useState();
  const [editOnChangeMovement, setEditOnChangeMovement] = useState();

  const newMoveRef = useRef();
  const addBtnRef = useRef();

  const addNewMovement = () => {
    setMovement([...movement, newOnChangeMovement]);
    setNewOnChangeMovement('');
    newMoveRef.current.focus();
  };

  const deleteMovement = movementIndex => {
    var filtered = movement.filter(function(value, index) {
      return movementIndex !== index;
    });

    setMovement(filtered);
  };

  const loadEditMovement = index => {
    setEditMovementIndex(index);
    setEditOnChangeMovement(movement[index]);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addBtnRef.current.click();
    }
  };

  return (
    <FormContainer
      onKeyPress={event => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
      }}
    >
      <h3>Movements</h3>
      {movement.map((move, index) => {
        return (
          <div className="form-group row" key={index}>
            <>
              <div className="col-md-3">{move}</div>
              {typeof editMovementIndex === 'undefined' && (
                <div className="col-md-3">
                  <Button onClick={() => deleteMovement(index)} className="btn btn-danger">
                    Delete
                  </Button>
                  <Button onClick={() => loadEditMovement(index)} className="btn btn-info">
                    Edit
                  </Button>
                </div>
              )}
            </>
          </div>
        );
      })}
      <div className="form-group row">
        <div className="col-md-3">
          <TextInput
            refEle={newMoveRef}
            placeholder="Add New Movement"
            value={newOnChangeMovement}
            onChange={e => setNewOnChangeMovement(e.target.value.toUpperCase())}
            onKeyPress={e => handleEnter(e)}
          />
        </div>
        <div className="col-md-3">
          <Button onClick={() => addNewMovement()} refEle={addBtnRef} className={'btn btn-primary'}>
            Add
          </Button>
        </div>
      </div>
    </FormContainer>
  );
};

export default BusMovementInputSec;
