import React, { useContext, useState } from 'react'
import getItem from '../services/getItem'
import useAuth from '../hooks/useAuth'

const AppContext = React.createContext()

export function useApp() {
  return useContext(AppContext)
}

export const AppProvider = ({ children, code }) => {
  const accessToken = useAuth(code)

  const [playTrack, setPlayTrack] = useState()
  const [initialPlayTrack, setInitialPlayTrack] = useState()
  const [searchResult, setSearchResult] = useState()

  const searchHandler = input => {
    getItem(input, accessToken).then(item => {
      setSearchResult(item)
    })
  }

  return (
    <AppContext.Provider
      value={{
        accessToken,
        playTrack,
        initialPlayTrack,
        searchResult,
        setPlayTrack,
        setInitialPlayTrack,
        searchHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
