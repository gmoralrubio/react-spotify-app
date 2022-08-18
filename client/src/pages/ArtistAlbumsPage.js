import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from './../context/ApiContext'
import Player from './../components/Player'
import SearchInput from '../components/SearchInput'
import getArtistAlbums from './../services/getArtistAlbums'

export default function ArtistAlbumsPage() {
  const { accessToken } = useApi()
  const [artistAlbums, setArtistAlbums] = useState()

  // REVISAR
  let { albumId } = useParams()

  useEffect(() => {
    getArtistAlbums(albumId, accessToken)
      .then(albums => setArtistAlbums(albums))
      .then(console.log('artistAlbums', artistAlbums))
  }, [albumId, accessToken])

  return (
    <div className="relative mb-20">
      {accessToken && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Player />
        </div>
      )}

      <div className="mt-10">
        <h1 className="mb-4 text-6xl font-bold text-white sm:text-8xl">Cambiar</h1>
        <h2 className=" mb-10 text-4xl font-light text-white sm:text-6xl">cambiar</h2>
      </div>

      {/* TODO: implementar busqueda */}
      <div className="mb-10">
        <SearchInput />
      </div>

      {artistAlbums &&
        artistAlbums.items.map(album => <div key={album.id}>{album.name}</div>)}
    </div>
  )
}
