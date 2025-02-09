import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <SocialLinks />
     <Experience />
     <Contact />
     </div>
    
  )
}

export default App
