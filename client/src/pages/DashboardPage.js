import { useEffect, useState } from 'react'

import getItem from '../services/getItem'
import getUserProfile from '../services/getUserProfile'
import getUserTopTracks from '../services/getUserTopTracks'
import getUserTopArtists from '../services/getUserTopArtists'
import SearchInput from '../components/SearchInput'
import CustomSwiper from '../components/CustomSwiper'
import Player from '../components/Player'
import UserProfile from '../components/UserProfile'
import { useApi } from '../context/ApiContext'

export default function DashboardPage() {
  const { accessToken } = useApi()

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
        {userProfile && <UserProfile userProfile={userProfile} />}

        <SearchInput onSearch={searchHandler} />

        <div className=" flex flex-col gap-8 py-10">
          {userTopTracks && !searchResult && (
            <CustomSwiper type={'top tracks'} slides={userTopTracks} />
          )}
          {userTopArtists && !searchResult && (
            <CustomSwiper type={'top artists'} slides={userTopArtists} />
          )}

          {searchResult && (
            <>
              {/* {console.log('albums', searchResult.albums)} */}
              <CustomSwiper type={'albums'} slides={searchResult.albums} />
              {/* {console.log('artists', searchResult.artists)} */}
              <CustomSwiper type={'artists'} slides={searchResult.artists} />
              {/* {console.log('playlists', searchResult.playlists)} */}
              <CustomSwiper type={'playlists'} slides={searchResult.playlists} />
              {/* {console.log('tracks', searchResult.tracks)} */}
              <CustomSwiper type={'tracks'} slides={searchResult.tracks} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
