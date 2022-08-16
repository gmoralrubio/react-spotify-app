import { useEffect, useState } from 'react'

import SearchInput from '../components/SearchInput'
import CustomSwiper from '../components/CustomSwiper'
import getItem from '../services/getItem'
import getUserTopItems from '../services/getUserTopItems'

export default function Dashboard({ accessToken }) {
  const [searchResult, setSearchResult] = useState()
  const searchHandler = input => {
    getItem(input, accessToken).then(item => {
      setSearchResult(item)
    })
  }
  useEffect(() => {
    getUserTopItems(accessToken).then(res => console.log(res))
  }, [accessToken])
  return (
    <>
      <div className="h-screen">
        <SearchInput onSearch={searchHandler} />
        {searchResult && (
          <div className=" flex flex-col gap-8 py-10">
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Albums</h2>
              {/* {console.log('albums', searchResult.albums)} */}
              <CustomSwiper type={'albums'} slides={searchResult.albums} />
            </div>
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Artists</h2>
              {/* {console.log('artists', searchResult.artists)} */}
              <CustomSwiper type={'artists'} slides={searchResult.artists} />
            </div>
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Playlists</h2>
              {/* {console.log('playlists', searchResult.playlists)} */}
              <CustomSwiper type={'playlists'} slides={searchResult.playlists} />
            </div>
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Tracks</h2>
              {/* {console.log('tracks', searchResult.tracks)} */}
              <CustomSwiper type={'tracks'} slides={searchResult.tracks} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
