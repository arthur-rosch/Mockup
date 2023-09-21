import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
      <BrowserRouter>
          <Router />
          <GlobalStyles />
      </BrowserRouter>
  )
}