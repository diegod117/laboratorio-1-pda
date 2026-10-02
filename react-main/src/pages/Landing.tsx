import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main>
      <h1>Bienvenido a la plataforma</h1>
      <p>
        Un espacio para crear tu perfil, conectar con otras personas y
        compartir lo que haces.
      </p>
      <ul>
        <li>Crea tu perfil personal.</li>
        <li>Accede con tu usuario desde cualquier lugar.</li>
        <li>Comparte tu página de perfil con un enlace propio.</li>
      </ul>
      <Link to="/login">Iniciar sesión</Link>
    </main>
  )
}

export default Landing
