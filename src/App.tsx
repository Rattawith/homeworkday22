import { useState } from 'react'
import Calculator from './component/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculator></Calculator>
    </>
  )
}

export default App
