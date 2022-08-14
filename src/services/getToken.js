import { CLIENT_ID, CLIENT_SECRET } from './../config'

export default async function getToken() {
  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  }

  let response = await fetch('https://accounts.spotify.com/api/token', authParameters)
  let result = await response.json()
  return result
}
