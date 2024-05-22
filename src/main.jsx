import ReactDOM from 'react-dom/client'
import './index.sass'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './components/app'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)