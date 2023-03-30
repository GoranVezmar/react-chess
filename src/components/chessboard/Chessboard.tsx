import { ALLOWED_ROW_TYPES, ALLOWED_COLUMN_TYPES } from '../../types/global'
import ChessboardFiled from '../chessboardField/ChessboardFiled'
import './chessboard.scss'

const Chessboard = () => {
  return (
    <div className='chessboard'>
      {ALLOWED_ROW_TYPES.sort((a, b) => parseInt(b) - parseInt(a)).map((row, rowIndex) =>
        ALLOWED_COLUMN_TYPES.map((column, columnIndex) => (
          <ChessboardFiled
            key={`${column}${row}`}
            row={row}
            column={column}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
          />
        )),
      )}
    </div>
  )
}

export default Chessboard
