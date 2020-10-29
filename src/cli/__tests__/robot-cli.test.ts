jest.spyOn(console, 'log');

const originalArgv = process.argv;

it('displays error when no file is provided', () => {
  process.argv[2] = '2';

  require('cli/robot-cli');

  expect(console.log).toHaveBeenLastCalledWith(`Safe cell count: 13`);

  process.argv = originalArgv;
});
