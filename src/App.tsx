import { useState, useEffect } from 'react';
import Pattern from './components/Pattern';
import getRandomBool2DArray from './utils/getRandom2DArray'
import './App.css';

const columns = 50;
const rows = 50;
const nextStateInterval = 400; // time in milliseconds

const initPattern = getRandomBool2DArray(rows, columns);

function App() {
  const [patternArr, setPatternArr] = useState(initPattern);
  const getArrVal = ( x: number, y: number, oldPatternArr: number[][] ) => {
    return oldPatternArr[x] && oldPatternArr[x][y] ? oldPatternArr[x][y] || 0 : 0;
  }

  const getNeighboursCount = (row: number, column: number, oldPatternArr: number[][]) => {
    return (
      getArrVal(row - 1, column - 1, oldPatternArr) +
      getArrVal(row - 1, column, oldPatternArr) +
      getArrVal(row - 1, column + 1, oldPatternArr) +
      getArrVal(row, column - 1, oldPatternArr) +
      getArrVal(row, column + 1, oldPatternArr) +
      getArrVal(row + 1, column - 1, oldPatternArr) +
      getArrVal(row + 1, column, oldPatternArr) +
      getArrVal(row + 1, column + 1, oldPatternArr)
    );
  }

  const getNewPatternState = (oldPatternArr: number[][]) => {
    let newState = [];
    for (let currentRow = 0; currentRow < rows; currentRow++) {
      const row = [];
      for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
        const neighborsCount: number = getNeighboursCount(currentRow, currentColumn, oldPatternArr);
        if (oldPatternArr[currentRow][currentColumn]) {
          if (neighborsCount < 2) {
            row.push(0);
          } else if (neighborsCount < 4) {
            row.push(1);
          } else {
            row.push(0);
          }
        } else {
          if (neighborsCount === 3) {
            row.push(1);
          } else {
            row.push(0);
          }
        }
      }
      newState.push(row);
    }

    return newState;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPatternArr(oldPatternArr => getNewPatternState(oldPatternArr))
    }, nextStateInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='wrapper'>
      <Pattern patternArr={patternArr} />
    </div>
  );
}

export default App;
