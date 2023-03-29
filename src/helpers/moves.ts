import { Move } from '../types/global'

export const generateMoveMessage = (move: Move) => {
  if (!move.capturedPiece) {
    return `${move.piece.color} ${move.piece.type} moved from ${move.prevField} to ${move.nextField}`
  }

  return `${move.piece.color} ${move.piece.type} moved from ${move.prevField} and captured ${move.capturedPiece.color} ${move.capturedPiece.type} on ${move.nextField}`
}
