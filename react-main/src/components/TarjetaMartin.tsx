import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

function TarjetaMartin() {
  // Estado tipado para contador de recomendaciones / me gusta
  const [likes, setLikes] = useState<number>(0)

  // Evento que actualiza el contador al hacer clic
  const handleLike = () => {
    setLikes((prev) => prev + 1)
  }

  // Leo la visita previa una sola vez al montar (sin setState dentro del effect)
  const claveStorage = 'ultima_visita_martin'
  const [ultimaVisita] = useState<string>(
    () => localStorage.getItem(claveStorage) ?? 'Primera visita registrada en este navegador',
  )

  // useEffect que registra en localStorage la fecha y hora de esta visita
  useEffect(() => {
    const ahora = new Date().toLocaleString('es-CL', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
    localStorage.setItem(claveStorage, ahora)
  }, [])

  return (
    <div style={estilos.tarjetaProyecto}>
      <h2 style={estilos.subtituloProyecto}>Estudiante de Ingeniería Informática</h2>
      <img
        src="https://img.magnific.com/vector-gratis/cartel-nostalgia-noventa_603843-2317.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Proyecto de Martín"
        style={estilos.imagenProyecto}
      />
      <p style={estilos.descripcionProyecto}>
        Implementación de tableros dinámicos en Power BI para el seguimiento continuo
        de indicadores de enfermedades profesionales. Integración y automatización de
        flujos de datos alimentados automáticamente desde hojas de cálculo de Excel
        para la toma de decisiones oportuna.
      </p>
      <div style={estilos.tags}>
        <span style={estilos.tag}>Power BI</span>
        <span style={estilos.tag}>Excel</span>
        <span style={estilos.tag}>Análisis de Datos</span>
      </div>
      <div style={estilos.enlaces}>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          style={estilos.enlace}
        >
          Ver perfil de LinkedIn →
        </a>
      </div>

      {/* Contador con estado tipado useState<number> y evento onClick */}
      <div style={estilos.contadorWrapper}>
        <span style={estilos.contadorTexto}>
          ❤️ Me gusta del proyecto: <strong>{likes}</strong>
        </span>
        <button
          onClick={handleLike}
          style={estilos.botonLike}
          aria-label="Dar me gusta"
        >
          Dar me gusta 👍
        </button>
      </div>

      {/* useEffect + localStorage: última visita a mi tarjeta */}
      <p style={estilos.visita}>🕒 Última visita: {ultimaVisita}</p>
    </div>
  )
}

const estilos: Record<string, CSSProperties> = {
  tarjetaProyecto: {
    background: 'var(--code-bg)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid var(--border)',
    textAlign: 'left' as const,
  },
  subtituloProyecto: {
    fontSize: '17px',
    color: 'var(--accent)',
    margin: '0 0 16px',
    fontWeight: 600,
  },
  imagenProyecto: {
    width: '100%',
    maxHeight: '220px',
    objectFit: 'cover' as const,
    borderRadius: '10px',
    marginBottom: '16px',
  },
  descripcionProyecto: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'var(--text)',
    marginBottom: '16px',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
    marginBottom: '16px',
  },
  tag: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '20px',
    background: 'var(--accent-bg)',
    color: 'var(--accent)',
    border: '1px solid var(--accent-border)',
  },
  enlaces: {
    display: 'flex',
    gap: '12px',
  },
  enlace: {
    fontSize: '13px',
    color: 'var(--accent)',
    textDecoration: 'none',
    fontWeight: 600,
  },
  contadorWrapper: {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px dashed var(--border)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  contadorTexto: {
    fontSize: '14px',
    color: 'var(--text-h)',
  },
  botonLike: {
    padding: '6px 14px',
    fontSize: '13px',
    fontWeight: 600,
    borderRadius: '10px',
    border: '1px solid var(--accent)',
    background: 'var(--accent)',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'var(--sans)',
    transition: 'opacity 0.2s',
  },
  visita: {
    fontSize: '13px',
    color: 'var(--text)',
    marginTop: '12px',
  },
}

export default TarjetaMartin
