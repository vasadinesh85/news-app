import { BrowserRouter, Routes, Route } from 'react-router-dom' // corrected import
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/LandingPage' // assumed import
import Homepage from './components/Homepage'       // assumed import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/homme' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

