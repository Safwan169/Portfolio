import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Componants/Nabvar'
import Banner from './Componants/Banner'
import Portfolio from './Portfolio'
import Contract from './Contract'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
<div className='bg-blue-950 '>
  
 <div className='lg:mx-20 md:space-y-20 lg:space-y-20 md:mx-16 mx-auto'>
 <Nabvar></Nabvar>
 <Banner> </Banner>
 <Portfolio></Portfolio>
 <Contract></Contract>
 </div>
  
  </div> 
 
 </>
  )
}

export default App
