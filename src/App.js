import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Matrix from './components/unused/Matrix'
import LoadingScreen from './components/LoadingScreen.jsx'
import Navbar from './components/Navbar.jsx'
import HeroFramer from './components/HeroFramer.jsx'
import './pages/main.css'
import GeneralMain from './components/GeneralMain.jsx'

const App = () => {
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

  const router = createHashRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HeroFramer loading={loading} />
            <ScrollRestoration />
            <LoadingScreen loading={loading} />
          </>
        }
      >
        <Route
          path="general"
          element={
            <>
              <Navbar />
              <GeneralMain loading={loading} />
              <ScrollRestoration />
            </>
          }
        />
      </Route>
    )
  )

  return <RouterProvider router={router}></RouterProvider>
}

export default App
