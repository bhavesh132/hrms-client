import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signout from './pages/Signout'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux'

function App() {
  const mode = useSelector((state) => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/sign-out' element={<Signout />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
