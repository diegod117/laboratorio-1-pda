import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './authContexto'
import type { Usuario } from './authContexto'
import { cuentas } from '../data/usuarios'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  // Credenciales válidas (simulación sin backend)
  const iniciarSesion = (nombre: string, contrasena: string) => {
    if (nombre === 'diego' && contrasena === '1234') {
      setUsuario({ nombre })
    }
  }
  const logout = () => setUsuario(null)

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
