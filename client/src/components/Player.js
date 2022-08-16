import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useParams } from 'react-router-dom'

export default function Player() {
  const { accessToken, uri } = useParams()
  console.log('accessToken', accessToken)
  return (
    <SpotifyPlayer token={accessToken} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
  )
}
