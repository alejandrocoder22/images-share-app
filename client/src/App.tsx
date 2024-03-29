import Router from './router/Router'
import ThemeContextProvider from './context/ThemeContextProvider'
import AuthContextProvider from './context/AuthContextProvider'

function App (): JSX.Element {
  return (

    <AuthContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </AuthContextProvider>

  )
}

export default App
