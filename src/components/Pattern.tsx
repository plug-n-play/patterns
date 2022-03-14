import { FC } from 'react';

type Pattern = number[][]

interface PatternProps {
  patternArr: Pattern
}

const Pattern: FC<PatternProps> = ({patternArr}) => {
  return (
    <div className='pattern-wrapper'>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          {patternArr.map((row, rowId) => (
            <tr key={rowId}>
              {
                row.map((cellData, cellId) => {
                  return (<td className={cellData ? 'live' : ''} key={cellId}></td>)
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Pattern;
