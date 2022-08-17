import React, { useContext, useState, useEffect } from 'react'
import useAuth from './../hooks/useAuth'
import axios from 'axios'

const ApiContext = React.createContext()

export function useApi() {
  return useContext(ApiContext)
}

export const ApiProvider = ({ children, code }) => {
  const accessToken = useAuth(code)

  return <ApiContext.Provider value={{ accessToken }}>{children}</ApiContext.Provider>
}
