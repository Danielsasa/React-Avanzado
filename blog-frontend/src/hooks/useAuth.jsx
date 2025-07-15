import { use } from 'react'
import { AuthContext } from '../context/AuthContext'

// 3. Crear un hook para usar el contexto de autenticación
export const useAuthContext = () => {
  const context = use(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
