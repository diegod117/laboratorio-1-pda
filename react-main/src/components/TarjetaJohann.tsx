import geocuartelIcon from '../assets/geocuartel.png'

function TarjetaJohann() {
  return (
    <section className="project-card">
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
