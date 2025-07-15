import { createContext } from 'react'

// create AuthContext
const AuthContext = createContext({})

// 2. crear el provedor del contecto

function AuthProvider ({ children }) {
  // aqui deberia colocar los datos de formal global
  const data = {
    // Aquí podrías agregar funciones y estados relacionados con la autenticación
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
