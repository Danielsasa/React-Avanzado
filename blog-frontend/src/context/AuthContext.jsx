import { createContext, useState, useEffect } from 'react'

// create AuthContext
const AuthContext = createContext({})

// 2. crear el provedor del contecto

function AuthProvider ({ children }) {
  // Logica de autenticación
  const [isAuth, setIsAuth] = useState(false) // Estado para verificar si el usuario está autenticado
  const [userPayload, setUserPayload] = useState(null) // Aquí podrías almacenar la información del usuario autenticado

  const login = (data) => {
    localStorage.setItem('userData', JSON.stringify(data)) // Guardar datos del usuario en localStorage
    setUserPayload(data) // Actualizar el estado con los datos del usuario
    setIsAuth(true) // Cambiar el estado de autenticación a verdadero
  }

  const logout = () => {
    localStorage.removeItem('userData') // Eliminar los datos del usuario del localStorage
    setUserPayload(null) // Limpiar el estado del usuario
    setIsAuth(false) // Cambiar el estado de autenticación a falso
  }

  useEffect(() => {
    // Verificar si hay datos de usuario en localStorage al cargar la aplicación
    const userData = localStorage.getItem('userData')
    if (userData) {
      setUserPayload(JSON.parse(userData)) // Si hay datos, establecer el estado del usuario
      setIsAuth(true) // Cambiar el estado de autenticación a verdadero
    }
  }, [])
  // aqui deberia colocar los datos de formal global

  const data = {
    // Aquí podrías agregar funciones y estados relacionados con la autenticación
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext value={data}>
      {children}
    </AuthContext>
  )
}

export { AuthContext, AuthProvider }
