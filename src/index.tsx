import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import 'bootstrap/dist/css/bootstrap.css'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const reactQueryOption = {
  queries: {
    // retry: 0, // 실패한 쿼리의 재시도 횟수. 0이면 재시도하지 않음.
    // suspense: true, // Suspense 컴포넌트를 사용하여 쿼리 로딩 상태를 처리할지 여부를 나타내는 플래그.
    staleTime: 60 * 1000, // 데이터가 stale 상태로 간주되기 전까지의 시간(밀리초). 이 시간 동안은 캐시된 데이터를 사용하고, 네트워크 리퀘스트를 보내지 않음.
    cacheTime: 5 * 60 * 1000, // 데이터를 캐시하는 기간(밀리초). 이 기간 동안은 캐시된 데이터를 사용하고, 네트워크 리퀘스트를 보내지 않음.
    // refetchOnMount: false, // 컴포넌트가 마운트될 때마다 쿼리를 리페치할지 여부를 나타내는 플래그.
    // refetchOnWindowFocus: false, // 윈도우가 포커스를 받을 때마다 쿼리를 리페치할지 여부를 나타내는 플래그.
    // refetchInterval: 60 * 1000, // 주기적으로 쿼리를 리페치하는 간격(밀리초).
  },
}

const queryClient = new QueryClient({
  defaultOptions: reactQueryOption,
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
