import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from './../context/ApiContext'
import Player from './../components/Player'
import SearchInput from '../components/SearchInput'
import getArtistAlbums from './../services/getArtistAlbums'
import Card from './../components/common/Card'

export default function ArtistAlbumsPage() {
  const { accessToken } = useApi()
  const [artistAlbums, setArtistAlbums] = useState()

  // REVISAR
  let { albumId } = useParams()

  useEffect(() => {
    getArtistAlbums(albumId, accessToken).then(setArtistAlbums)
  }, [albumId, accessToken])

  return (
    <div className="relative mb-20">
      {accessToken && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Player />
        </div>
      )}

      <div className="mt-10">
        <h1 className="mb-4 text-6xl font-bold text-white sm:text-8xl">
          {artistAlbums.items[0].artists[0].name}
        </h1>
        <h2 className=" mb-10 text-4xl font-light text-white sm:text-6xl">Albums</h2>
      </div>

      {/* TODO: implementar busqueda */}
      <div className="mb-10">
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {artistAlbums &&
          artistAlbums.items.map(album => (
            <Link to={`/album-tracks/${album.id}/${album.name}`} key={album.id}>
              <Card className=" bg-slate-700 p-4">
                <img src={album.images[1].url} alt="" className="mb-4 rounded-full" />
                <h3 className="text-lg font-bold">{album.name}</h3>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  )
}
