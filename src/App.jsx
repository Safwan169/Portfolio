import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Componants/Nabvar'
import Banner from './Componants/Banner'
import Portfolio from './Portfolio'
// import Contract from './Contract'
// import About from './About'
import Skills from './Skills'
import Education from './Education'
import Contract from './Contract'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-slate-900   '>
        <div className=' mx-auto'>
          <Nabvar></Nabvar>

        </div>
        <div className='lg:mx-20 space-y-20  h-full  md:mx-16 mx-auto'>
          <Banner> </Banner>
          {/* <About></About> */}
          <Skills></Skills>
          <Education></Education>
          <Portfolio></Portfolio>
          <Contract></Contract>


        </div>
        <div>

        </div>

      </div>

    </>
  )
}

export default App
