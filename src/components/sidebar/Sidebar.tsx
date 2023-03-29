import { useContext } from 'react'
import { GameContext } from '../../store/GameContext'
import { generateMoveMessage } from '../../helpers/moves'
import './sidebar.scss'

const Sidebar = () => {
  const { moves } = useContext(GameContext)

  return (
    <div className='sidebar'>
      <div className='sidebar_label'>Moves:</div>
      <ul className='sidebar_moves'>
        {moves.map((move) => (
          <li key={move.id} className='sidebar_move'>
            {generateMoveMessage(move)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
