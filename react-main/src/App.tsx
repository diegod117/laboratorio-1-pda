import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Perfil from './pages/Perfil'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil/:usuario" element={<Perfil />} />
    </Routes>
  )
}

export default App
