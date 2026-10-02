// usuarios de prueba del laboratorio (no hay backend, cada integrante agrega el suyo)
export interface Cuenta {
  usuario: string
  contrasena: string
}

export const cuentas: Cuenta[] = [
  { usuario: 'johann1234', contrasena: '9871' },
]
