// eslint-disable-next-line
import Matrix from './components/unused/Matrix'
import LoadingScreen from './components/LoadingScreen.jsx'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import './pages/Main.css'
import HeroFramer from './components/HeroFramer.jsx'
import './pages/main2.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Navbar />
      {/* <Hero loading={loading} /> */}
      <HeroFramer loading={loading} />
      {/* <LoadingScreen loading={loading} /> */}
    </div>
  )
}

export default App
