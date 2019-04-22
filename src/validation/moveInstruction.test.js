import validateMovementInput from './moveInstruction';

test('Shoud be an object with error - Please enter movement and isValid false', () => {
  const validationResult = validateMovementInput('');
  expect(validationResult).toEqual({ error: 'Please enter movement', isValid: false });
});

test('Shoud be an object with error - Invalid Command', () => {
  const validationResult = validateMovementInput('ABC');
  const expected = { error: 'Invalid Command (ABC)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command - MOVE', () => {
  const validationResult = validateMovementInput('MOVE1');
  const expected = { error: 'Invalid Command (MOVE1)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command LEFT', () => {
  const validationResult = validateMovementInput('LEFT2');
  const expected = { error: 'Invalid Command (LEFT2)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command PLACE', () => {
  const validationResult = validateMovementInput('PLACE 1,2');
  const expected = { error: 'Invalid PLACE Command (PLACE 1,2)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command PLACE 2', () => {
  const validationResult = validateMovementInput('PLACE 1,2');
  const expected = { error: 'Invalid PLACE Command (PLACE 1,2)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command PLACE - Out of Range', () => {
  const validationResult = validateMovementInput('PLACE 6,2,WEST');
  const expected = { error: 'Invalid PLACE Command (PLACE 6,2,WEST), Out of Range!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with error - Invalid Command PLACE - Wrong facing', () => {
  const validationResult = validateMovementInput('PLACE 1,2,EA');
  const expected = {
    error: 'Invalid PLACE Command (PLACE 1,2,EA), Facing must be NORTH, EAST, SOUTH, WEST!'
  };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an object with No error and isValid true - test MOVE - 1', () => {
  const validationResult = validateMovementInput('MOVE');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be an object with No error and isValid true - test LEFT - 2', () => {
  const validationResult = validateMovementInput('LEFT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be an object with No error and isValid true - test RIGHT - 3', () => {
  const validationResult = validateMovementInput('RIGHT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be an object with No error and isValid true - test PLACE 1,2,NORTH - 4', () => {
  const validationResult = validateMovementInput('PLACE 1,2,NORTH');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be an object with No error and isValid true - test REPORT - 5', () => {
  const validationResult = validateMovementInput('REPORT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});
