import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ForgotPassword from './pages/ForgotPassword'
import Offer from './pages/Offer'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='/offer'
            element={<Offer />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/sign-in'
            element={<SignIn />}
          />
          <Route
            path='/sign-up'
            element={<SignUp />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
