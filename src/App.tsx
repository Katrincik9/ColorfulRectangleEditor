import './App.css'
import { BoxInserter } from './components/BoxInserter'
import { BoxEditor } from './components/BoxEditor'
import { BoxList } from './components/BoxList'

function App() {
  return (
    <div className="rectangle-editor">
      <h1>Colorful Rectangles Editor</h1>
      <div className="box-form">
        <BoxInserter />
        <BoxEditor />
      </div>
      <BoxList />
    </div>
  )
}

export default App
