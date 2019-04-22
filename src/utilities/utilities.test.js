import { calBusMovement } from './utilities';

test('Shoud be returning ReportLocation, messages with result 0,1,NORTH', () => {
  const movement = ['PLACE 0,0,NORTH', 'MOVE', 'REPORT'];
  const expected = { xAxis: 0, yAxis: 1, face: 'NORTH' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Shoud be returning ReportLocation, messages with result 0,0,WEST', () => {
  const movement = ['PLACE 0,0,NORTH', 'LEFT', 'REPORT'];
  const expected = { xAxis: 0, yAxis: 0, face: 'WEST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Shoud be returning ReportLocation, messages with result 3,3,NORTH', () => {
  const movement = ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'];
  const expected = { xAxis: 3, yAxis: 3, face: 'NORTH' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
});

test('Shoud be returning ReportLocation, messages with result 1,2,WEST', () => {
  const movement = ['MOVE', 'MOVE', 'LEFT', 'PLACE 2,3,SOUTH', 'MOVE', 'RIGHT', 'MOVE', 'REPORT'];
  const expected = { xAxis: 1, yAxis: 2, face: 'WEST' };
  const { ReportLocation, messages } = calBusMovement(movement);
  expect(messages[messages.length - 1].newLoc).toEqual(expect.objectContaining(expected));
  expect(ReportLocation[0]).toEqual(expect.objectContaining(expected));
  expect(messages[0].newLoc).toBeNull();
});
