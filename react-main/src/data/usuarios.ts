// usuarios de prueba del laboratorio (no hay backend, cada integrante agrega el suyo)
export interface Cuenta {
  usuario: string
  contrasena: string
  nombreCompleto: string
}

export const cuentas: Cuenta[] = [
  { usuario: 'johann1234', contrasena: '9871', nombreCompleto: 'Johann Cortés Farias' },
  { usuario: 'diego', contrasena: '1234', nombreCompleto: 'Diego Cortes Toro' },
  { usuario: 'martin', contrasena: '1234', nombreCompleto: 'Martin Zepeda Puelles' },
]
