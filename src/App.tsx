import Home from './pages/Home'
import User from './pages/User'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/user/:id" Component={User} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
