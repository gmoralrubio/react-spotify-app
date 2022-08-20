import { useEffect, useState } from 'react'

import getItem from '../services/getItem'
import getUserProfile from '../services/getUserProfile'
import getUserTopTracks from '../services/getUserTopTracks'
import getUserTopArtists from '../services/getUserTopArtists'
import SearchInput from '../components/SearchInput'
import CustomSwiper from '../components/CustomSwiper'
import Player from '../components/Player'
import UserProfile from '../components/UserProfile'
import { useApp } from '../context/AppContext'

export default function DashboardPage() {
  const { accessToken, setInitialPlayTrack, searchResult } = useApp()

  const [userProfile, setUserProfile] = useState()
  const [userTopTracks, setUserTopTracks] = useState()
  const [userTopArtists, setUserTopArtists] = useState()

  useEffect(() => {
    if (accessToken) {
      getUserProfile(accessToken).then(res => setUserProfile(res))
      getUserTopTracks(accessToken).then(res => {
        setUserTopTracks(res)
        setInitialPlayTrack(res.items[0].uri)
      })
      getUserTopArtists(accessToken).then(res => setUserTopArtists(res))
    }
  }, [accessToken])

  return (
    <>
      {accessToken && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          <Player />
        </div>
      )}

      <div className="relative py-6 ">
        {userProfile && <UserProfile userProfile={userProfile} />}

        <SearchInput />
        {/* <SearchInput onSearch={searchHandler} /> */}

        <div className=" flex flex-col gap-8 py-10">
          {userTopTracks && !searchResult && (
            <CustomSwiper type={'top tracks'} slides={userTopTracks} />
          )}
          {userTopArtists && !searchResult && (
            <CustomSwiper type={'top artists'} slides={userTopArtists} />
          )}

          {searchResult && (
            <>
              <CustomSwiper slides={searchResult.albums} />
              <CustomSwiper slides={searchResult.artists} />
              <CustomSwiper slides={searchResult.playlists} />
              <CustomSwiper slides={searchResult.tracks} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
