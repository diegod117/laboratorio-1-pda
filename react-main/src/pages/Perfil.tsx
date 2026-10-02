import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function Perfil() {
  const { usuario: usuarioUrl } = useParams<{ usuario: string }>()
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  if (!auth) {
    throw new Error('Perfil debe usarse dentro de un AuthProvider')
  }

  const { usuario, logout } = auth

  // Verificar que el usuario logueado coincida con el de la URL
  if (!usuario) {
    return (
      <main>
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para ver este perfil.</p>
        <button onClick={() => navigate('/login')}>Ir al login</button>
      </main>
    )
  }

  if (usuario.nombre !== decodeURIComponent(usuarioUrl ?? '')) {
    return (
      <main>
        <h1>Perfil no autorizado</h1>
        <p>
          No puedes ver el perfil de otro usuario. Estás logueado como{' '}
          <strong>{usuario.nombre}</strong>.
        </p>
        <button onClick={() => navigate(`/perfil/${encodeURIComponent(usuario.nombre)}`)}>
          Ir a mi perfil
        </button>
      </main>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  // Estado propio: contador de "me gusta"
  const [meGusta, setMeGusta] = useState<number>(0)

  const handleMeGusta = () => {
    setMeGusta((prev) => prev + 1)
  }

  return (
    <main>
      <header>
        <h1>Perfil de {usuario.nombre}</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </header>

      <section className="perfil-card">
        <h2 className="perfil-card-titulo">Diego Cortes Toro</h2>
        <p className="perfil-card-subtitulo">
          Estudiante Ing. Civil en Computación e Informática — Universidad Central de Chile
        </p>

        <p className="perfil-card-descripcion">
          Estudiante de 4° año con formación sólida en programación, desarrollo
          de sistemas y hardware. He participado en proyectos universitarios de
          integración de sistemas en equipos multidisciplinarios y en el
          prototipado de soluciones con Arduino e IoT, aplicando conceptos de
          ingeniería de software y buenas prácticas de documentación técnica.
        </p>

        <div className="perfil-card-tags">
          <span className="tag">Java</span>
          <span className="tag">Python</span>
          <span className="tag">C</span>
          <span className="tag">C++</span>
          <span className="tag">SQL</span>
          <span className="tag">Arduino</span>
          <span className="tag">IoT</span>
        </div>

        <div className="perfil-card-likes">
          <button className="btn-me-gusta" onClick={handleMeGusta}>
            👍 Me gusta
          </button>
          <span className="likes-count">{meGusta}</span>
        </div>
      </section>
    </main>
  )
}

export default Perfil
