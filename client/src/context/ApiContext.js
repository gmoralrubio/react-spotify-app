import React, { useContext, useState } from 'react'
import useAuth from './../hooks/useAuth'

const ApiContext = React.createContext()

export function useApi() {
  return useContext(ApiContext)
}

export const ApiProvider = ({ children, code }) => {
  const accessToken = useAuth(code)

  const [playTrack, setPlayTrack] = useState()
  const [initialPlayTrack, setInitialPlayTrack] = useState()

  return (
    <ApiContext.Provider
      value={{
        accessToken,
        playTrack,
        initialPlayTrack,
        setPlayTrack,
        setInitialPlayTrack,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
