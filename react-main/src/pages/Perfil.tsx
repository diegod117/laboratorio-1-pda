import { useContext } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TarjetaJohann from '../components/TarjetaJohann'
import TarjetaDiego from '../components/TarjetaDiego'
import TarjetaMartin from '../components/TarjetaMartin'
import { AuthContext } from '../context/AuthContext'
import { cuentas } from '../data/usuarios'

// cada integrante muestra su propia tarjeta en su perfil
const tarjetas: Record<string, ComponentType> = {
  johann1234: TarjetaJohann,
  diego: TarjetaDiego,
  martin: TarjetaMartin,
}

function Perfil() {
  const auth = useContext(AuthContext)
  const usuario = auth?.usuario
  const logout = auth?.logout
  const { usuario: usuarioUrl } = useParams<{ usuario: string }>()
  const navigate = useNavigate()

  // Si no hay usuario logueado, redirigir al login
  if (!usuario) {
    return (
      <main style={estilos.contenedor}>
        <div style={estilos.card}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔒</div>
          <h1 style={estilos.titulo}>Acceso restringido</h1>
          <p style={estilos.subtitulo}>Debes iniciar sesión para ver tu perfil.</p>
          <button
            onClick={() => navigate('/login')}
            style={estilos.botonPrimario}
          >
            Ir al login
          </button>
        </div>
      </main>
    )
  }

  // Confirmar si el usuario en la URL coincide con la sesión activa
  const esUsuarioValido = usuario.nombre.toLowerCase() === usuarioUrl?.toLowerCase()

  // Nombre para mostrar en el perfil
  const cuenta = cuentas.find((c) => c.usuario === usuario.nombre)
  const nombreMostrar = cuenta?.nombreCompleto ?? usuario.nombre
  const Tarjeta = tarjetas[usuario.nombre]

  const handleLogout = () => {
    if (logout) logout()
    navigate('/')
  }

  return (
    <main style={estilos.contenedor}>
      <div style={estilos.card}>
        {/* Avatar */}
        <div style={estilos.avatarWrapper}>
          <div style={estilos.avatar}>
            {nombreMostrar.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Saludo y Nombre completo */}
        <p style={estilos.saludo}>Bienvenido 👋</p>
        <h1 style={estilos.nombreCompleto}>{nombreMostrar}</h1>

        {/* Verificación con useParams */}
        <div style={esUsuarioValido ? estilos.badgeValido : estilos.badgeInvalido}>
          {esUsuarioValido
            ? `✓ Perfil confirmado: @${usuarioUrl} coincide con la sesión actual`
            : `⚠️ Estás viendo la ruta de @${usuarioUrl}, pero iniciaste sesión como @${usuario.nombre}`}
        </div>

        {/* Tarjeta con datos del Laboratorio 1 */}
        {Tarjeta && <Tarjeta />}

        {/* Info de cuenta */}
        <div style={estilos.infoCard}>
          <div style={estilos.infoFila}>
            <span style={estilos.infoLabel}>👤 Usuario</span>
            <span style={estilos.infoValor}>{usuario.nombre}</span>
          </div>
        </div>

        {/* Botón de cerrar sesión */}
        <button onClick={handleLogout} style={estilos.botonLogout}>
          Cerrar sesión
        </button>
      </div>
    </main>
  )
}

const estilos: Record<string, CSSProperties> = {
  contenedor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '480px',
    padding: '48px 40px',
    borderRadius: '20px',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    boxShadow: 'var(--shadow)',
    textAlign: 'center' as const,
  },
  avatarWrapper: {
    marginBottom: '20px',
  },
  avatar: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--accent), #7c3aed)',
    color: '#fff',
    fontSize: '36px',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(170, 59, 255, 0.3)',
  },
  saludo: {
    fontSize: '16px',
    color: 'var(--text)',
    margin: '0 0 4px',
  },
  nombreCompleto: {
    fontSize: '36px',
    fontWeight: 700,
    color: 'var(--text-h)',
    margin: '0 0 16px',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  badgeValido: {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: 500,
    padding: '6px 14px',
    borderRadius: '20px',
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    marginBottom: '24px',
  },
  badgeInvalido: {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: 500,
    padding: '6px 14px',
    borderRadius: '20px',
    background: 'rgba(239, 68, 68, 0.1)',
    color: '#ef4444',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    marginBottom: '24px',
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
    margin: '0 0 24px',
  },
  infoCard: {
    padding: '20px 24px',
    borderRadius: '14px',
    background: 'var(--code-bg)',
    border: '1px solid var(--border)',
    marginBottom: '28px',
    textAlign: 'left' as const,
  },
  infoFila: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 0',
  },
  infoLabel: {
    fontSize: '14px',
    color: 'var(--text)',
  },
  infoValor: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-h)',
  },
  separador: {
    height: '1px',
    background: 'var(--border)',
    margin: '12px 0',
  },
  botonPrimario: {
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '12px',
    border: 'none',
    background: 'var(--accent)',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'var(--sans)',
    transition: 'opacity 0.2s',
  },
  botonLogout: {
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: 500,
    borderRadius: '12px',
    border: '1px solid var(--border)',
    background: 'transparent',
    color: 'var(--text)',
    cursor: 'pointer',
    fontFamily: 'var(--sans)',
    transition: 'background 0.2s, color 0.2s',
  },
}

export default Perfil
