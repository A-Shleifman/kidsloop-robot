import Robot from 'entities/Robot';

it('counts 1 safe cell when threshold is 0', () => {
  expect(new Robot(0).safeCellCount).toEqual(1);
});

it('counts 5 safe cells when threshold is 1', () => {
  expect(new Robot(1).safeCellCount).toEqual(5);
});

it('counts 13 safe cells when threshold is 2', () => {
  expect(new Robot(2).safeCellCount).toEqual(13);
});

// based on spec
it('returns a 6 digit number when threshold is 23', () => {
  expect(new Robot(23).safeCellCount.toString().length).toEqual(6);
});
