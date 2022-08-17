import { CLIENT_ID, REDIRECT_URI } from '../config'
import PrimaryButton from '../components/common/PrimaryButton'

export default function LoginPage() {
  return (
    <>
      <h1 className="py-10 text-6xl font-bold text-white sm:text-8xl">
        Spotify, <br /> <span className="font-light">but worst</span>
      </h1>
      <PrimaryButton
        href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read`}
      >
        Login
      </PrimaryButton>
    </>
  )
}
