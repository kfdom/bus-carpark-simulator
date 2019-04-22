import React, { useState, useRef } from 'react';
import validateMovementInput from '../validation/moveInstruction';
import TextInput from './formElements/TextInput';
import Button from './formElements/Button';
import FormContainer from './formElements/FormContainer';

const BusMovementInputSec = () => {
  const [movement, setMovement] = useState([]);
  const [newOnChangeMovement, setNewOnChangeMovement] = useState('');
  const [editMovementIndex, setEditMovementIndex] = useState();
  const [editOnChangeMovement, setEditOnChangeMovement] = useState();
  const [error, setError] = useState('');

  const newMoveRef = useRef();
  const editMoveRef = useRef();
  const addBtnRef = useRef();

  const addNewMovement = () => {
    const validationResult = validateMovementInput(newOnChangeMovement);

    if (validationResult.isValid) {
      setError('');
      setMovement([...movement, newOnChangeMovement]);
      setNewOnChangeMovement('');
      newMoveRef.current.focus();
    } else {
      setError(validationResult.error);
    }
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

  const saveEditMovement = index => {
    const validationResult = validateMovementInput(editMoveRef.current.value);

    if (validationResult.isValid) {
      let tempMovement = movement;
      tempMovement[index] = editMoveRef.current.value;
      setMovement(tempMovement);
      setEditMovementIndex();
    } else {
      setError(validationResult.error);
    }
  };

  const resetMovement = () => {
    setMovement([]);
    setEditMovementIndex();
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      addBtnRef.current.click();
    }
  };

  const onSubmitMovement = () => {};

  return (
    <FormContainer
      onSubmit={onSubmitMovement}
      onKeyPress={event => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
      }}
    >
      {error !== '' && <div className="alert alert-danger">{error}</div>}
      <h3>Movements</h3>
      {movement.map((move, index) => {
        return (
          <div className="form-group row" key={index}>
            {editMovementIndex !== index ? (
              <>
                <div className="col-md-3">
                  {index + 1}. {move}
                </div>
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
            ) : (
              <>
                <div className="col-md-3">
                  <TextInput
                    refEle={editMoveRef}
                    placeholder="Movement"
                    value={editOnChangeMovement}
                    onChange={e => setEditOnChangeMovement(e.target.value.toUpperCase())}
                  />
                </div>
                <div className="col-md-3">
                  <Button onClick={() => saveEditMovement(index)} className={'btn btn-primary'}>
                    Save
                  </Button>
                  <Button onClick={() => setEditMovementIndex()} className={'btn btn-light'}>
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </div>
        );
      })}
      {typeof editMovementIndex === 'undefined' && (
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
            <Button
              onClick={() => addNewMovement()}
              refEle={addBtnRef}
              className={'btn btn-primary'}
            >
              Add
            </Button>
          </div>
        </div>
      )}
      <div className="form-group row">
        <div className="col-md-1">
          <Button onClick={() => resetMovement()} className={'btn btn-info'}>
            Reset
          </Button>
        </div>
        <div className="col-md-1">
          <Button type="button" onClick={onSubmitMovement} className={'btn btn-success'}>
            Submit
          </Button>
        </div>
      </div>
    </FormContainer>
  );
};

export default BusMovementInputSec;
