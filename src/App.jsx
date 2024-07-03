import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Componants/Nabvar'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
<div className='bg-blue-900 '>
  
 <Nabvar></Nabvar>
  
  </div> 
 
 </>
  )
}

export default App
