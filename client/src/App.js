import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AlbumTracks from './pages/AlbumTracks'
import Header from './components/common/Header'
import Player from './components/Player'
import Login from './pages/Login'
import useAuth from './hooks/useAuth'

function App() {
  // The code that's returned as a query parameter to the redirect URI
  const code = new URLSearchParams(window.location.search).get('code')

  const accessToken = useAuth(code)
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-6xl bg-slate-800 px-6">
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/callback"
            element={<Dashboard accessToken={accessToken} />}
          ></Route>
          <Route
            path="/album-tracks/:albumId/:albumName"
            element={<AlbumTracks accessToken={accessToken} />}
          ></Route>
          <Route path="/player/:accessToken/:uri" element={<Player />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
