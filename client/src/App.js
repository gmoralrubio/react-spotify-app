import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import AlbumTracksPage from './pages/AlbumTracksPage'
import { ApiProvider } from './context/ApiContext'

function App() {
  const code = new URLSearchParams(window.location.search).get('code')

  return (
    <ApiProvider code={code}>
      <BrowserRouter>
        <div className="mx-auto max-w-6xl bg-slate-800 px-6">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/callback" element={<DashboardPage />} />
            <Route
              path="/album-tracks/:albumId/:albumName"
              element={<AlbumTracksPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App
