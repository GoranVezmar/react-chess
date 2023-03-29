import Layout from './components/layout/Layout'
import { GameContextProvider } from './store/GameContext'

const App = () => {
  return (
    <GameContextProvider>
      <Layout />
    </GameContextProvider>
  )
}

export default App
