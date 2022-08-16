import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios
      .post(
        'http://localhost:3001/callback',
        {
          code,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        // window.history.pushState({}, null, '/callback')
      })
      .catch(error => {
        window.location = '/'
        console.log(error)
      })
  }, [code])
  return accessToken
}
