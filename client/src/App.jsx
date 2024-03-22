import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signout from './pages/Signout'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'

function App() {


  return (
    <>
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
    </>
  )
}

export default App
