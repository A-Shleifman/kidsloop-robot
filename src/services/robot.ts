import Robot from 'entities/Robot';

export const countSafeCells = (threshold: number = 23) => new Robot(threshold).safeCellCount;
