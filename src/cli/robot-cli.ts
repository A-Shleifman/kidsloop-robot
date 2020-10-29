import Robot from 'entities/Robot';

const [, , explosiveThreshold = 23] = process.argv;

const { safeCellCount } = new Robot(Number(explosiveThreshold));

console.log(`Safe cell count: ${safeCellCount}`);
