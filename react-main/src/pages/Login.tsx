import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!nombre.trim() || !password.trim()) {
      setError('Completa todos los campos')
      return
    }

    setCargando(true)

    // Simular un pequeño delay para UX
    setTimeout(() => {
      const exito = login(nombre, password)
      if (exito) {
        navigate(`/perfil/${nombre.toLowerCase()}`)
      } else {
        setError('Usuario o contraseña incorrectos')
        setCargando(false)
      }
    }, 600)
  }

  return (
    <main style={estilos.contenedor}>
      <div style={estilos.card}>
        <div style={estilos.iconoWrapper}>
          <div style={estilos.icono}>🔐</div>
        </div>
        <h1 style={estilos.titulo}>Iniciar sesión</h1>
        <p style={estilos.subtitulo}>Ingresa tus credenciales para acceder</p>

        <form onSubmit={handleSubmit} style={estilos.form}>
          <div style={estilos.campo}>
            <label htmlFor="nombre" style={estilos.label}>
              Usuario
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre de usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={estilos.input}
              autoComplete="username"
              autoFocus
            />
          </div>

          <div style={estilos.campo}>
            <label htmlFor="password" style={estilos.label}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={estilos.input}
              autoComplete="current-password"
            />
          </div>

          {error && <p style={estilos.error}>{error}</p>}

          <button
            type="submit"
            disabled={cargando}
            style={{
              ...estilos.boton,
              opacity: cargando ? 0.7 : 1,
              cursor: cargando ? 'wait' : 'pointer',
            }}
          >
            {cargando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <Link to="/" style={estilos.link}>
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}

const estilos: Record<string, React.CSSProperties> = {
  contenedor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '48px 40px',
    borderRadius: '20px',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    boxShadow: 'var(--shadow)',
    textAlign: 'center' as const,
  },
  iconoWrapper: {
    marginBottom: '16px',
  },
  icono: {
    fontSize: '48px',
    lineHeight: 1,
  },
  titulo: {
    fontSize: '28px',
    fontWeight: 600,
    color: 'var(--text-h)',
    margin: '0 0 8px',
    letterSpacing: '-0.5px',
  },
  subtitulo: {
    fontSize: '15px',
    color: 'var(--text)',
    margin: '0 0 32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  campo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
    textAlign: 'left' as const,
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-h)',
    letterSpacing: '0.3px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    background: 'var(--code-bg)',
    color: 'var(--text-h)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'var(--sans)',
  },
  error: {
    color: '#ef4444',
    fontSize: '14px',
    margin: 0,
    padding: '8px 12px',
    borderRadius: '8px',
    background: 'rgba(239, 68, 68, 0.08)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
  },
  boton: {
    padding: '14px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    border: 'none',
    background: 'var(--accent)',
    color: '#fff',
    fontFamily: 'var(--sans)',
    transition: 'opacity 0.2s, transform 0.1s',
    marginTop: '8px',
  },
  link: {
    display: 'inline-block',
    marginTop: '24px',
    fontSize: '14px',
    color: 'var(--accent)',
    textDecoration: 'none',
  },
}

export default Login
