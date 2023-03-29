import { ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Piece, Move } from '../types/global'
import { INITIAL_PIECES } from '../data/inititalFields'

type GameContext = {
  moves: Move[]
  pieces: Record<string, Piece | null>
  selectedFieldId: string
  handleFieldClick: (pieceId: string) => void
}

export const GameContext = createContext<GameContext>({
  moves: [],
  pieces: {},
  selectedFieldId: '',
  handleFieldClick: () => {},
})

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [moves, setMoves] = useState<GameContext['moves']>([])
  const [pieces, setPieces] = useState<GameContext['pieces']>(INITIAL_PIECES)
  const [selectedFieldId, setSelectedFieldId] = useState<GameContext['selectedFieldId']>('')

  const handleFieldClick = (fieldId: string) => {
    const prevSelectedPiece = pieces[selectedFieldId]
    const newSelectedPiece = pieces[fieldId]

    // return if first cick is an empty field
    if (!prevSelectedPiece && !newSelectedPiece) return

    // if no prev piece, set selected pieceID and return
    if (!prevSelectedPiece) {
      setSelectedFieldId(fieldId)
      return
    }

    // remove selection if user tries to capture his own piece
    if (prevSelectedPiece?.color === newSelectedPiece?.color) {
      setSelectedFieldId('')
      return
    }

    setMoves((prevValue) => [
      ...prevValue,
      {
        id: uuidv4(),
        prevField: selectedFieldId,
        nextField: fieldId,
        piece: prevSelectedPiece,
        capturedPiece: newSelectedPiece,
      },
    ])

    setPieces((prevValue) => ({
      ...prevValue,
      [selectedFieldId]: null,
      [fieldId]: {
        type: prevSelectedPiece.type,
        color: prevSelectedPiece.color,
      },
    }))

    setSelectedFieldId('')
  }

  const contextValue: GameContext = {
    moves,
    pieces,
    selectedFieldId,
    handleFieldClick,
  }

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
}
