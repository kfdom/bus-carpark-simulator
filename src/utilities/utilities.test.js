import { calBusMovement } from './utilities';

test('Testing example A, Shoud be returning ReportLocation, messages with result 0,1,NORTH', () => {
  const movement = ['PLACE 0,0,NORTH', 'MOVE', 'REPORT'];
  const expected = { xAxis: 0, yAxis: 1, face: 'NORTH' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing example B, Shoud be returning ReportLocation, messages with result 0,0,WEST', () => {
  const movement = ['PLACE 0,0,NORTH', 'LEFT', 'REPORT'];
  const expected = { xAxis: 0, yAxis: 0, face: 'WEST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing example C, Shoud be returning ReportLocation, messages with result 3,3,NORTH', () => {
  const movement = ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'];
  const expected = { xAxis: 3, yAxis: 3, face: 'NORTH' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing valid MOVE Command', () => {
  const movement = ['PLACE 1,1,NORTH', 'MOVE', 'REPORT'];
  const expected = { xAxis: 1, yAxis: 2, face: 'NORTH' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing valid LEFT Command', () => {
  const movement = ['PLACE 1,1,NORTH', 'LEFT', 'REPORT'];
  const expected = { xAxis: 1, yAxis: 1, face: 'WEST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing valid RIGHT Command', () => {
  const movement = ['PLACE 1,1,NORTH', 'RIGHT', 'REPORT'];
  const expected = { xAxis: 1, yAxis: 1, face: 'EAST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Testing MOVE Command - out of bound', () => {
  const movement = ['PLACE 5,1,EAST', 'MOVE', 'REPORT'];
  const expected = { xAxis: 5, yAxis: 1, face: 'EAST' };
  const expected2 = 'Error';
  const { messages } = calBusMovement(movement);
  expect(messages[1].newLoc).toEqual(expect.objectContaining(expected));
  expect(messages[1].type).toBe(expected2);
});

test('Testing long movement list, Shoud be returning ReportLocation, messages with result 1,2,WEST', () => {
  const movement = ['MOVE', 'MOVE', 'LEFT', 'PLACE 2,3,SOUTH', 'MOVE', 'RIGHT', 'MOVE', 'REPORT'];
  const expected = { xAxis: 1, yAxis: 2, face: 'WEST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
  expect(messages[0].newLoc).toBeNull();
});
