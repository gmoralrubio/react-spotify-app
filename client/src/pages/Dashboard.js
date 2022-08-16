import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

import getItem from '../services/getItem'
import getUserProfile from '../services/getUserProfile'
import getUserTopTracks from '../services/getUserTopTracks'
import getUserTopArtists from '../services/getUserTopArtists'
import SearchInput from '../components/SearchInput'
import CustomSwiper from '../components/CustomSwiper'
import Player from '../components/Player'

export default function Dashboard() {
  // The code that's returned as a query parameter to the redirect URI
  const code = new URLSearchParams(window.location.search).get('code')
  const accessToken = useAuth(code)

  const [playingTrack, setPlayingTrack] = useState()
  const [userProfile, setUserProfile] = useState()
  const [userTopTracks, setUserTopTracks] = useState()
  const [userTopArtists, setUserTopArtists] = useState()

  const [searchResult, setSearchResult] = useState()
  const searchHandler = input => {
    getItem(input, accessToken).then(item => {
      setSearchResult(item)
    })
  }
  useEffect(() => {
    if (accessToken) {
      getUserProfile(accessToken).then(res => setUserProfile(res))
      getUserTopTracks(accessToken).then(res => setUserTopTracks(res))
      getUserTopArtists(accessToken).then(res => setUserTopArtists(res))
    }
  }, [accessToken])

  return (
    <>
      {accessToken && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Player accessToken={accessToken} trackUri={playingTrack?.uri}></Player>
        </div>
      )}

      <div className="relative  py-6 ">
        {userProfile && (
          <div className="mb-10 flex items-center gap-6">
            <div className="w-40 ">
              <img className="rounded-full" src={userProfile.images[0].url} alt="" />
            </div>
            <h1 className="py-10 text-4xl font-bold text-white sm:text-6xl">
              {userProfile.display_name}
            </h1>
          </div>
        )}

        <SearchInput onSearch={searchHandler} />

        <div className=" flex flex-col gap-8 py-10">
          {userTopTracks && !searchResult && (
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Your top tracks</h2>
              <CustomSwiper type={'tracks'} slides={userTopTracks} />
            </div>
          )}
          {userTopArtists && !searchResult && (
            <div className="rounded-md bg-slate-700 p-4">
              <h2 className="mb-4 text-xl font-bold text-white">Your top artists</h2>
              <CustomSwiper type={'artists'} slides={userTopArtists} />
            </div>
          )}

          {searchResult && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  )
}
