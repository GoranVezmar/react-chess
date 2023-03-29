import './instructions.scss'

const Instructions = () => {
  return (
    <div className='instructions'>
      <h1>Instructions</h1>
      <div className='instructions_right'>
        <p>
          Click once to select any piece, and then click again to move it or capture another piece.
        </p>
        <p>
          Any piece can move(jump) on any field. Same color piece cannot be captured. If you try a
          previously selected piece will be deselected.
        </p>
      </div>
    </div>
  )
}

export default Instructions
