
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from '../pages/Home'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'
import Menu from '../components/Menu'
import Login from '../pages/Login'
import Register from '../pages/Register'

import { UserContext } from '../context/AuthContextProvider'
import Dashboard from '../pages/Dashboard'
import { apiUrl } from '../services/apiUrl'

const Router = (): JSX.Element => {
  const themeContext: any = useContext(ThemeContext)
  const authContext: any = useContext(UserContext)

  const verifyToken = (): void => {
    fetch(apiUrl + 'auth/verify', {
      method: 'GET',
      headers: {
        token: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
      .then(async response => await response.json())
      .then(data => {
        if (data.status === 'SUCESS') {
          authContext?.setUser({
            isLogged: true
          })
        }
      }).catch(error => console.log(error))
  }

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <BrowserRouter>
      <Menu id={themeContext.themeMode} setThemeMode={themeContext.setThemeMode} />
      <main id={themeContext.themeMode}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={authContext.user.isLogged ? <Dashboard /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Router
