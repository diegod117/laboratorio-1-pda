import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import geocuartelIcon from '../assets/geocuartel.png'

function TarjetaJohann() {
  const { usuario: usuarioUrl } = useParams()
  const auth = useContext(AuthContext)
  const esMiPerfil = auth?.usuario?.nombre === usuarioUrl

  return (
    <section className="project-card">
      {esMiPerfil ? (
        <p className="perfil-estado">Hola {usuarioUrl}, este es tu perfil</p>
      ) : (
        <p className="perfil-estado">
          Estás viendo el perfil de {usuarioUrl} sin haber iniciado sesión con esa cuenta
        </p>
      )}
      <h3 className="project-author">Johann Cortés Farias</h3>
      <h2 className="project-title">Geocuartel</h2>
      <img src={geocuartelIcon} alt="Ícono de Geocuartel" className="project-image" />
      <p className="project-description">
        Aplicación web para el monitoreo de estados fenológicos y plagas en
        cultivos de mandarinas y uvas. Registra por cuartel lo observado en
        terreno para comparar temporadas y decidir a tiempo las aplicaciones.
      </p>
      <div className="project-tags">
        <span className="tag">HTML</span>
        <span className="tag">CSS</span>
        <span className="tag">JavaScript</span>
        <span className="tag">Supabase</span>
        <span className="tag">Netlify</span>
      </div>
    </section>
  )
}

export default TarjetaJohann
