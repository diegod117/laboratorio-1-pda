import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface Usuario {
  nombre: string
  email: string
}

export interface AuthContextType {
  usuario: Usuario | null
  login: (usuario: Usuario) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const login = (nuevoUsuario: Usuario) => setUsuario(nuevoUsuario)
  const logout = () => setUsuario(null)

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
