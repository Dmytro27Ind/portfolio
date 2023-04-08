import React from 'react'
import { useSelector } from 'react-redux'
import Header from './modules/Header'
import { RootState } from './store'

function App() {
  const theme = useSelector<RootState>((state) => state.theme.theme)

  return (
    <div className={`font-sans ${theme}`}>
      <Header />
    </div>
  )
}

export default App
