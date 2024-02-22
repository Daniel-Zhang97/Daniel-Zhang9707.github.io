// eslint-disable-next-line
import Matrix from './components/unused/Matrix'
import LoadingScreen from './components/LoadingScreen.jsx'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroFramer from './components/HeroFramer.jsx'
import './pages/main.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [loading])

  return (
    <div>
      <Navbar />
      <HeroFramer loading={loading} />
      <LoadingScreen loading={loading} />
    </div>
  )
}

export default App
