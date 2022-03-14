// Randomly returns 0 or 1
const getRandomBool = () => Math.round(Math.random());

// Returns a random 2D Array, with each cell containing 0 or 1
const getRandomBool2DArray = (
  rows: number,
  columns: number,
  fill: () => number = getRandomBool
) => {
  return Array
          .from(
            { length: columns },
            () => Array.from({ length: rows }, fill)
          );
}

export default getRandomBool2DArray;
