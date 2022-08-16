import { BASE_API_URL } from '../config'

export default async function getUserTopArtists(accessToken) {
  const queryParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  let response = await fetch(`${BASE_API_URL}/me/top/artists`, queryParameters)
  let result = await response.json()
  return result
}
