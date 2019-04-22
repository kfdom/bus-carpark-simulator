import isEmpty from './is-empty';

const validateMovementInput = movementData => {
  movementData = movementData.trim();
  let error = '';

  if (isEmpty(movementData)) {
    error = 'Please enter movement';
  } else if (
    !movementData.includes('PLACE') &&
    !movementData.includes('MOVE') &&
    !movementData.includes('LEFT') &&
    !movementData.includes('RIGHT') &&
    !movementData.includes('REPORT')
  ) {
    error = `Invalid Command (${movementData})!`;
  } else if (
    (movementData.includes('MOVE') && movementData.length !== 4) ||
    (movementData.includes('LEFT') && movementData.length !== 4) ||
    (movementData.includes('RIGHT') && movementData.length !== 5) ||
    (movementData.includes('REPORT') && movementData.length !== 6)
  ) {
    error = `Invalid Command (${movementData})!`;
  } else if (movementData.includes('PLACE')) {
    const newMovementData = movementData.substring(5);
    const newMovementDataList = newMovementData.split(',');

    if (newMovementDataList.length !== 3) {
      error = `Invalid PLACE Command (${movementData})!`;
    } else if (
      !Number.isInteger(parseInt(newMovementDataList[0])) ||
      !Number.isInteger(parseInt(newMovementDataList[1]))
    ) {
      error = `Invalid PLACE Command (${movementData})!`;
    } else if (
      newMovementDataList[0] < 0 ||
      newMovementDataList[0] > 5 ||
      newMovementDataList[1] < 0 ||
      newMovementDataList[1] > 5
    ) {
      error = `Invalid PLACE Command (${movementData}), Out of Range!`;
    } else if (
      newMovementDataList[2] !== 'NORTH' &&
      newMovementDataList[2] !== 'EAST' &&
      newMovementDataList[2] !== 'SOUTH' &&
      newMovementDataList[2] !== 'WEST'
    ) {
      error = `Invalid PLACE Command (${movementData}), Facing must be NORTH, EAST, SOUTH, WEST!`;
    }
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};

export default validateMovementInput;
