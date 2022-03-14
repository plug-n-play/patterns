import getRandomBool2DArray from './getRandom2DArray';

describe('getRandomBool2DArray', () => {
  test('should return a 2 Dimensional Boolean array of provided parameters', () => {
    const columns = 20
    const rows = 10
    const twoDArr = getRandomBool2DArray(columns, rows);
    expect(twoDArr).toHaveLength(rows)
    expect(twoDArr[rows-1]).toHaveLength(columns)
  });
})
