import { useContext } from 'react'
import { isRowLight } from '../../helpers/fileds'
import { AllowedColumnTypes, AllowedRowTypes } from '../../types/global'
import { GameContext } from '../../store/GameContext'
import './chessboardFiled.scss'

type ChessboardFiledProps = {
  row: AllowedRowTypes
  rowIndex: number
  column: AllowedColumnTypes
  columnIndex: number
}

const ChessboardFiled = ({ row, rowIndex, column, columnIndex }: ChessboardFiledProps) => {
  const { pieces, selectedFieldId, handleFieldClick } = useContext(GameContext)

  const fieldId = `${column}${row}`
  const piece = pieces[fieldId]
  const imgUrl = piece ? `/${piece.color}-${piece.type}.png` : ''

  return (
    <div
      className={`
        chessboardField ${
          isRowLight(rowIndex, columnIndex) ? 'chessboardField--light' : 'chessboardField--dark'
        }
        ${selectedFieldId === fieldId ? 'chessboardField--selected' : ''}
        `}
      onClick={() => handleFieldClick(fieldId)}
    >
      {row === '1' && <span className='chessboardField_column'>{column}</span>}
      {column === 'a' && <span className='chessboardField_row'>{row}</span>}
      {imgUrl && <img className='chessboardField_image' src={imgUrl} />}
    </div>
  )
}

export default ChessboardFiled
