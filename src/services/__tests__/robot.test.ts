import * as RobotService from 'services/robot';
import Robot from 'entities/Robot';

const testValue = 42;

jest.spyOn(Robot.prototype, 'safeCellCount', 'get').mockReturnValue(testValue);

describe('countSafeCells', () => {
  it('returns safeCellCount', () => {
    expect(RobotService.countSafeCells(0)).toEqual(testValue);
  });
});
