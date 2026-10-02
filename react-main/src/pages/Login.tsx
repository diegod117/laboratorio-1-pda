import { useContext, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const [nombreUsuario, setNombreUsuario] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  if (!auth) {
    throw new Error('Login debe usarse dentro de un AuthProvider')
  }
  const { iniciarSesion } = auth

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nombre = nombreUsuario.trim()
    if (!nombre || !contrasena) return

    iniciarSesion(nombre, contrasena)
    navigate(`/perfil/${encodeURIComponent(nombre)}`)
  }

  return (
    <main>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usuario">Nombre de usuario</label>
        <input
          id="usuario"
          type="text"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          autoComplete="username"
          required
        />

        <label htmlFor="contrasena">Contraseña</label>
        <input
          id="contrasena"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default Login
