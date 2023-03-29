export const isRowLight = (rowIndex: number, columnIndex: number) => {
  if (rowIndex % 2 === 0) return columnIndex % 2 === 0
  return columnIndex % 2 === 1
}
