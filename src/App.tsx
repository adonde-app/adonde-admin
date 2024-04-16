import Home from './pages/Home'
import NavBar from './components/NavBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Home />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
