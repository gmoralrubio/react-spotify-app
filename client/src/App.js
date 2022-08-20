import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import AlbumTracksPage from './pages/AlbumTracksPage'
import { AppProvider } from './context/AppContext'
import ArtistAlbumsPage from './pages/ArtistAlbumsPage'
import { BiHomeSmile } from 'react-icons/bi'

function App() {
  const code = new URLSearchParams(window.location.search).get('code')

  return (
    <AppProvider code={code}>
      <BrowserRouter>
        <div className="bg-slate-700 p-4">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Spotify, <span className="font-light">but worst</span>
            </h1>
            <Link className="text-white" to="/callback">
              <div className="rounded-full bg-rose-600 p-2 ">
                <BiHomeSmile size={28} />
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl bg-slate-800 px-6">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/callback" element={<DashboardPage />} />
            <Route
              path="/album-tracks/:albumId/:albumName"
              element={<AlbumTracksPage />}
            />
            <Route path="/artist-albums/:albumId" element={<ArtistAlbumsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
