import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-6xl bg-slate-800 px-6">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/callback" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
