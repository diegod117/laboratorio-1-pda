import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface Usuario {
  nombre: string
  nombreCompleto: string
  email: string
}

export interface AuthContextType {
  usuario: Usuario | null
  login: (nombre: string, password: string) => boolean
  logout: () => void
}

// Registro de usuarios con credenciales hardcodeadas
const USUARIOS_REGISTRADOS: Record<string, { password: string; datos: Usuario }> = {
  martin: {
    password: '12345',
    datos: {
      nombre: 'martin',
      nombreCompleto: 'Martin Zepeda Puelles',
      email: 'martin@correo.cl',
    },
  },
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const login = (nombre: string, password: string): boolean => {
    const registro = USUARIOS_REGISTRADOS[nombre.toLowerCase()]
    if (registro && registro.password === password) {
      setUsuario(registro.datos)
      return true
    }
    return false
  }

  const logout = () => setUsuario(null)

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}
