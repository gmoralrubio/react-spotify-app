import React from 'react'
import PrimaryButton from './../components/common/PrimaryButton'
import { CLIENT_ID, REDIRECT_URI } from './../config'
export default function Login() {
  return (
    <PrimaryButton
      href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`}
    >
      Login
    </PrimaryButton>
  )
}
