import { BASE_API_URL } from '../config'

export default async function getItem(input, accessToken) {
  const queryParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  let response = await fetch(
    `${BASE_API_URL}/search?q=${input}&type=artist,album,track,playlist&market=ES`,
    queryParameters
  )
  let result = await response.json()
  return result
}
