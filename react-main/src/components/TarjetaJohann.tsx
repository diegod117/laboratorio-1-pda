import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/authContexto'
import geocuartelIcon from '../assets/geocuartel.png'
import './TarjetaJohann.css'

function TarjetaJohann() {
  const { usuario: usuarioUrl } = useParams()
  const auth = useContext(AuthContext)
  const esMiPerfil = auth?.usuario?.nombre === usuarioUrl
  const [meGusta, setMeGusta] = useState<number>(0)
  const clave = `ultima-visita-${usuarioUrl}`
  const [visitaAnterior] = useState<string | null>(() => localStorage.getItem(clave))

  // cada vez que cambia el usuario de la url guardo la fecha de esta visita
  useEffect(() => {
    localStorage.setItem(clave, new Date().toLocaleString('es-CL'))
  }, [clave])

  return (
    <section className="project-card tarjeta-johann">
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
      <p className="ultima-visita">
        {visitaAnterior
          ? `Última visita a este perfil: ${visitaAnterior}`
          : 'Primera visita a este perfil'}
      </p>
      <button className="btn-accion" onClick={() => setMeGusta(meGusta + 1)}>
        👍 Me gusta ({meGusta})
      </button>
    </section>
  )
}

export default TarjetaJohann
