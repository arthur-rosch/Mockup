import { Home } from './pages/Home'
import { Login } from './pages/LogIn'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { MembersArea } from './pages/MembersArea'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/membersArea" element={<MembersArea />} />
    </Routes>
  )
}