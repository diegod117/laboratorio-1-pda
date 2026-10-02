import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface Usuario {
  nombre: string
  email?: string
}

export interface AuthContextType {
  usuario: Usuario | null
  iniciarSesion: (nombre: string, contrasena: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  // Sin backend: la contraseña no se valida, solo se guarda el nombre en sesión
  const iniciarSesion = (nombre: string, _contrasena: string) =>
    setUsuario({ nombre })
  const logout = () => setUsuario(null)

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
