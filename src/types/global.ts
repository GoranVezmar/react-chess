export const PLAYER_COLORS = {
  white: 'white',
  black: 'black',
} as const

export const ALLOWED_PLAYER_COLOR_TYPES = Object.values(PLAYER_COLORS)

export type AllowedPlayerColorTypes = typeof ALLOWED_PLAYER_COLOR_TYPES[number]

export const PIECES = {
  king: 'king',
  queen: 'queen',
  rook: 'rook',
  knight: 'knight',
  bishop: 'bishop',
  pawn: 'pawn',
} as const

export const ALLOWED_PIECE_TYPES = Object.values(PIECES)

export type AllowedPieceTypes = typeof ALLOWED_PIECE_TYPES[number]

export const ROWS = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  SVGMatrix: '6',
  seven: '7',
  eight: '8',
} as const

export const ALLOWED_ROW_TYPES = Object.values(ROWS)

export type AllowedRowTypes = typeof ALLOWED_ROW_TYPES[number]

export const COLUMNS = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
} as const

export const ALLOWED_COLUMN_TYPES = Object.values(COLUMNS)

export type AllowedColumnTypes = typeof ALLOWED_COLUMN_TYPES[number]

export type Move = {
  id: string
  piece: Piece
  prevField: string
  nextField: string
  capturedPiece?: Piece | null
}

export type Piece = {
  type: AllowedPieceTypes
  color: AllowedPlayerColorTypes
}
