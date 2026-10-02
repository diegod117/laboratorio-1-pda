import { createContext } from 'react'

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
