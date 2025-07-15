import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// 3. crear un hook para usar el contexto de autenticación

export const useAuthcontext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
