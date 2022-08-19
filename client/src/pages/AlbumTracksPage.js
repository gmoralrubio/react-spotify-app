import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getAlbumTracks from '../services/getAlbumTracks'
import { millisToMinutesAndSeconds } from '../helpers'
import { useApi } from './../context/ApiContext'
import Player from './../components/Player'
import SearchInput from '../components/SearchInput'

export default function AlbumTracksPage() {
  const { accessToken, setPlayTrack } = useApi()

  // REVISAR
  let { albumId, albumName } = useParams()
  const [albumTracks, setAlbumTracks] = useState()

  useEffect(() => {
    getAlbumTracks(albumId, accessToken).then(setAlbumTracks)
  }, [albumId, accessToken])

  const clickHandler = trackUri => {
    setPlayTrack(trackUri)
  }

  return (
    <div className="relative mb-20">
      {accessToken && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Player />
        </div>
      )}

      <div className="mt-10">
        <h1 className="mb-4 text-6xl font-bold text-white sm:text-8xl">
          {albumTracks && albumTracks.items[0].artists[0].name}
        </h1>
        <h2 className=" mb-10 text-4xl font-light text-white sm:text-6xl">{albumName}</h2>
      </div>

      {/* TODO: implementar busqueda */}
      <div className="mb-10">
        <SearchInput />
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-6 p-2 font-bold text-white">
          <span className="col-span-2">Title</span>
          <span className="col-span-2 text-center">Album</span>
          <span className="text-center">Artist</span>
          <span className="text-right">Duration</span>
        </div>
        {albumTracks &&
          albumTracks.items.map(track => (
            <div
              className="grid cursor-pointer grid-cols-6 p-2 text-white hover:bg-slate-900/20"
              key={track.id}
              onClick={() => clickHandler(track.uri)}
            >
              <span className="col-span-2">{track.name}</span>
              <span className="col-span-2 text-center">{albumName}</span>
              <span className="text-center">{track.artists[0].name}</span>
              <span className="text-right">
                {millisToMinutesAndSeconds(track.duration_ms)}
              </span>
            </div>
          ))}
      </div>
    </div>
  )
}
