import Home from './pages/Home'
import User from './pages/User'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/user/:id" Component={User} />
      </Routes>

      <ReactQueryDevtools />
    </BrowserRouter>
  )
}

export default App
