import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import getAlbumTracks from '../services/getAlbumTracks'
import { millisToMinutesAndSeconds } from './../helpers'

export default function AlbumTracks({ accessToken }) {
  const [albumTracks, setAlbumTracks] = useState()
  let { albumId, albumName } = useParams()

  useEffect(() => {
    getAlbumTracks(albumId, accessToken)
      .then(albumTracks => setAlbumTracks(albumTracks))
      .then(console.log('albumTracks', albumTracks))
  }, [albumId])
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-6 p-2 font-bold text-white">
          <span className="col-span-2">Title</span>
          <span className="col-span-2 text-center">Album</span>
          <span className="text-center">Artist</span>
          <span className="text-right">Duration</span>
        </div>
        {albumTracks &&
          albumTracks.items.map(track => (
            <Link
              key={track.id}
              to={`/player/${accessToken}/${track.uri}`}
              className="cursor-pointer"
            >
              <div className="grid grid-cols-6 p-2 text-white hover:bg-slate-900/20">
                <span className="col-span-2">{track.name}</span>
                <span className="col-span-2 text-center">{albumName}</span>
                <span className="text-center">{track.artists[0].name}</span>
                <span className="text-right">
                  {millisToMinutesAndSeconds(track.duration_ms)}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
