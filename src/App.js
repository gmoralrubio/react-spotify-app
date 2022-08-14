import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import getToken from './services/getToken'
import getItem from './services/getItem'
import CustomSwiper from './components/CustomSwiper'

function App() {
  const [accessToken, setAccessToken] = useState('')
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    getToken().then(token => setAccessToken(token.access_token))
  }, [])

  const searchHandler = input => {
    getItem(input, accessToken).then(item => {
      setSearchResult(item)
    })
  }
  return (
    <>
      <div className="mx-auto max-w-6xl bg-slate-800 px-6">
        <h1 className="py-10 text-6xl font-bold text-white sm:text-8xl">
          Spotify, <br /> <span className="font-light">but better</span>
        </h1>
        <div className="h-screen">
          <SearchInput onSearch={searchHandler} />
          {searchResult && (
            <div className=" flex flex-col gap-8 py-10">
              <div className="bg-slate-700 p-4">
                <h2 className="mb-4 text-xl font-bold text-white">Albums</h2>
                {console.log('albums', searchResult.albums)}
                <CustomSwiper type={'albums'} slides={searchResult.albums} />
              </div>
              <div className="bg-slate-700 p-4">
                <h2 className="mb-4 text-xl font-bold text-white">Artists</h2>
                {console.log('artists', searchResult.artists)}
                <CustomSwiper type={'artists'} slides={searchResult.artists} />
              </div>
              <div className="bg-slate-700 p-4">
                <h2 className="mb-4 text-xl font-bold text-white">Playlists</h2>
                {console.log('playlists', searchResult.playlists)}
                <CustomSwiper type={'playlists'} slides={searchResult.playlists} />
              </div>
              <div className="bg-slate-700 p-4">
                <h2 className="mb-4 text-xl font-bold text-white">Tracks</h2>
                {console.log('tracks', searchResult.tracks)}
                <CustomSwiper type={'tracks'} slides={searchResult.tracks} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
