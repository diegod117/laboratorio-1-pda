import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import { cuentas } from '../data/usuarios'

export interface Usuario {
  nombre: string
  email?: string
}

export interface AuthContextType {
  usuario: Usuario | null
  iniciarSesion: (nombre: string, contrasena: string) => boolean
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

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
