import { useState } from 'react'
import './App.css'
import type { BoxData } from './types/box'
import { BoxInserter } from './components/BoxInserter'
import { BoxEditor } from './components/BoxEditor'
import { BoxList } from './components/BoxList'
import { BoxContext } from './context/boxContext'

function App() {
  const [selectedBox, setSelectedBox] = useState<BoxData | null>(null)

  const contextValues = {
    selectedBox,
    setSelectedBox
  }

  return (
    <BoxContext.Provider value={contextValues}>
      <div className="rectangle-editor">
        <h1>Colorful Rectangles Editor</h1>
        <div className="box-form">
          <BoxInserter />
          <BoxEditor />
        </div>
        <BoxList />
      </div>
    </BoxContext.Provider >
  )
}

export default App
