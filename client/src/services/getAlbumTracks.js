import { BASE_API_URL } from '../config'

export default async function getAlbumTracks(id, accessToken) {
  const queryParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  let response = await fetch(
    `${BASE_API_URL}/albums/${id}/tracks?market=ES`,
    queryParameters
  )
  let result = await response.json()
  return result
}
