import validateMovementInput from './moveInstruction';

test('Shoud be an error when empty command', () => {
  const validationResult = validateMovementInput('');
  expect(validationResult).toEqual({ error: 'Please enter movement', isValid: false });
});

test('Shoud be an error when invalid keyword', () => {
  const validationResult = validateMovementInput('ABC');
  const expected = { error: 'Invalid Command (ABC)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid MOVE command', () => {
  const validationResult = validateMovementInput('MOVE1');
  const expected = { error: 'Invalid Command (MOVE1)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid LEFT command', () => {
  const validationResult = validateMovementInput('LEFT2');
  const expected = { error: 'Invalid Command (LEFT2)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid RIGHT command', () => {
  const validationResult = validateMovementInput('RIGHT3');
  const expected = { error: 'Invalid Command (RIGHT3)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid REPORT command', () => {
  const validationResult = validateMovementInput('REPORT4');
  const expected = { error: 'Invalid Command (REPORT4)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid PLACE command', () => {
  const validationResult = validateMovementInput('PLACE 1,2');
  const expected = { error: 'Invalid PLACE Command (PLACE 1,2)!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid PLACE command - Out of Range', () => {
  const validationResult = validateMovementInput('PLACE 6,2,WEST');
  const expected = { error: 'Invalid PLACE Command (PLACE 6,2,WEST), Out of Range!' };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be an error when invalid PLACE command - Wrong facing', () => {
  const validationResult = validateMovementInput('PLACE 1,2,EA');
  const expected = {
    error: 'Invalid PLACE Command (PLACE 1,2,EA), Facing must be NORTH, EAST, SOUTH, WEST!'
  };
  expect(validationResult).toEqual(expect.objectContaining(expected));
});

test('Shoud be valid on valid MOVE command', () => {
  const validationResult = validateMovementInput('MOVE');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be valid on valid LEFT command', () => {
  const validationResult = validateMovementInput('LEFT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be valid on valid RIGHT command', () => {
  const validationResult = validateMovementInput('RIGHT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be valid on valid PLACE command', () => {
  const validationResult = validateMovementInput('PLACE 1,2,NORTH');
  expect(validationResult).toEqual({ error: '', isValid: true });
});

test('Shoud be valid on valid REPORT command', () => {
  const validationResult = validateMovementInput('REPORT');
  expect(validationResult).toEqual({ error: '', isValid: true });
});
