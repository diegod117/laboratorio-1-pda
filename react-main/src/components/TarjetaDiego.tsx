import { useEffect, useState } from 'react'
import './TarjetaDiego.css'

function TarjetaDiego() {
  // Estado propio: contador de "me gusta"
  const [meGusta, setMeGusta] = useState<number>(0)

  const handleMeGusta = () => {
    setMeGusta((prev) => prev + 1)
  }

  // useEffect: leo la visita anterior al montar y guardo la actual
  const claveVisita = 'ultimaVisita_diego'
  const [ultimaVisita] = useState<string | null>(() => localStorage.getItem(claveVisita))

  useEffect(() => {
    const ahora = new Date().toLocaleString('es-CL')
    localStorage.setItem(claveVisita, ahora)
  }, [])

  return (
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

      {ultimaVisita && (
        <p className="perfil-card-visita">
          Última visita: {ultimaVisita}
        </p>
      )}
    </section>
  )
}

export default TarjetaDiego
