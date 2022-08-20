import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function SearchInput() {
  const { searchHandler } = useApp()

  const [searchInput, setSearchInput] = useState('')

  const searchInputHandler = e => setSearchInput(e.target.value)

  const submitHandler = e => {
    e.preventDefault()
    if (searchInput.trim().length === 0) return
    searchHandler(searchInput)
    setSearchInput('')
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="relative">
          <input
            className="form-input w-full rounded-md text-lg"
            type="text"
            placeholder="Albums, artists, tracks, playlists..."
            value={searchInput}
            onChange={searchInputHandler}
          />
          <div className="absolute top-0 right-0 h-full">
            <button
              type="submit"
              className="h-full rounded-r-md bg-rose-600 px-6 font-bold text-white hover:bg-rose-700 focus:bg-rose-700 active:bg-rose-700"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
