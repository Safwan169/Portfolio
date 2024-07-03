import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Componants/Nabvar'
import Banner from './Componants/Banner'
import Portfolio from './Portfolio'
import Contract from './Contract'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
<div className='bg-blue-950 md:space-y-20 lg:space-y-20  '>
<div className=' mx-auto'>
 <Nabvar></Nabvar>
  
  </div>  
 <div className='lg:mx-20 md:space-y-20 lg:space-y-20 md:mx-16 mx-auto'>
 <Banner> </Banner>
<About></About> 
<Portfolio></Portfolio>
 <Contract></Contract>
 </div>
  
  </div> 
 
 </>
  )
}

export default App
