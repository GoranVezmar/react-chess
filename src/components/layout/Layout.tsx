import Chessboard from '../chessboard/Chessboard'
import Instructions from '../instructions/Instructions'
import Sidebar from '../sidebar/Sidebar'
import './layout.scss'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout_game'>
        <Instructions />
        <Chessboard />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
