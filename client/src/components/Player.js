import SpotifyPlayer from 'react-spotify-web-playback'
import { useApp } from '../context/AppContext'

export default function Player() {
  const { accessToken, playTrack, initialPlayTrack } = useApp()
  return (
    <>
      {initialPlayTrack && (
        <SpotifyPlayer
          token={accessToken}
          uris={playTrack ? [playTrack] : [initialPlayTrack]}
          play={playTrack ? true : false}
          magnifySliderOnHover={true}
          styles={{
            bgColor: '#0f172a',
            color: '#ffffff',
            sliderColor: '#f43f5e',
            sliderTrackColor: '#881337',
            trackNameColor: '#ffffff',
            trackArtistColor: '#ffffff',
          }}
        />
      )}
    </>
  )
}
